import {
  useContract,
  useContractMetadata,
  useContractRead,
  useSDK,
} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import { atom, useAtom } from "jotai";
import { Suspense, useMemo, useState } from "react";
import {
  Button,
  Frame,
  GroupBox,
  Hourglass,
  ScrollView,
  Tab,
  TabBody,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tabs,
  TextInput,
} from "react95";
import styled from "styled-components";
import { suspend } from "suspend-react";
import { useFetch } from "usehooks-ts";
import { ExchangeAbi } from "../core/abi";
import { useCurrentTheme } from "../core/theme-context";

const sdk = new ThirdwebSDK("goerli");

function useExchanges() {
  const contract = suspend(
    () =>
      sdk.getContract("0x54FE39d149cE771cFe56f56f96dd807d4b8C1158", "custom"),
    ["0x54FE39d149cE771cFe56f56f96dd807d4b8C1158"]
  );

  const events = suspend(
    () => contract.events.getEvents("CreatedExchange"),
    ["CreatedExchange"]
  );

  const exchanges = useMemo(
    () =>
      events.map(
        (event) =>
          event.data as { exchangeAddress: string; tokenAddress: string }
      ),
    [events]
  );

  return exchanges;
}

function PoolRow({
  exchangeAddress,
  tokenAddress,
}: {
  exchangeAddress: string;
  tokenAddress: string;
}) {
  const exchangeContract = suspend(
    () => sdk.getContractFromAbi(exchangeAddress, ExchangeAbi),
    [exchangeAddress]
  );
  const [selectedPool, setSelectedPool] = useAtom(selectedPoolAtom);

  const tokenContract = suspend(
    () => sdk.getContract(tokenAddress, "token"),
    [tokenAddress]
  );

  const { data } = useContractMetadata(tokenContract);
  const { config } = useCurrentTheme();

  const reserve = suspend(()=>exchangeContract.call('getReserve'),[exchangeContract, 'getReserve'])

  return (
    <TableRow
      onClick={() => {
        setSelectedPool({ exchangeAddress, tokenAddress });
      }}
      style={{
        cursor: "pointer",
        ...(selectedPool?.exchangeAddress === exchangeAddress && {
          backgroundColor: config.hoverBackground,
          color: config.canvasTextInvert,
        }),
      }}
    >
      <TableDataCell>{data?.name}</TableDataCell>
      <TableDataCell>{data?.symbol}</TableDataCell>
      <TableDataCell>{ethers.BigNumber.from(reserve).toString()}</TableDataCell>
      <TableDataCell>{tokenAddress}</TableDataCell>
    </TableRow>
  );
}

const StyledScrollView = styled(ScrollView)`
  & > * > * {
    width: fit-content;
  }
`;

function PoolTable() {
  const exchanges = useExchanges();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Symbol</TableHeadCell>
          <TableHeadCell>Reserve</TableHeadCell>
          <TableHeadCell>Address</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {exchanges.map((exchange) => (
          <PoolRow
            key={exchange.exchangeAddress}
            exchangeAddress={exchange.exchangeAddress}
            tokenAddress={exchange.tokenAddress}
          />
        ))}
      </TableBody>
    </Table>
  );
}

function Loader() {
  return (
    <Frame
      variant="well"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Hourglass />
    </Frame>
  );
}

const selectedPoolAtom = atom<{
  exchangeAddress: string;
  tokenAddress: string;
} | null>(null);


export default function Pool() {
  const [selectedPool] = useAtom(selectedPoolAtom);
  const { contract: tokenContract } = useContract(selectedPool?.tokenAddress, "custom");
  const { data } = useContractMetadata(tokenContract);
  const sdk = useSDK();



  const exchangeContract = (address:string)=>{
    return sdk?.getContractFromAbi(address,ExchangeAbi)
  }

  const [amount, setAmount] = useState(0)
  const [eth, setEth] = useState(0)

  return (
    <>
      <Tabs value="0">
        <Tab value="0" selected>
          All pools
        </Tab>
        <Tab value="1">Create Pool</Tab>
      </Tabs>
      <TabBody>
        <Suspense fallback={<Loader />}>
          <StyledScrollView>
            <PoolTable />
          </StyledScrollView>
        </Suspense>
        <GroupBox
          label="Pool actions"
          style={{
            marginTop: "1rem",
          }}
        >
          <GroupBox label="Selected pool">
            <TextInput
              readOnly
              defaultValue={
                data
                  ? `${data.name} (${data.symbol})`
                  : "Select pool from table..."
              }
            />
          </GroupBox>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <GroupBox label="Amount">
              <GroupBox label='ERC20'>

              <TextInput    type='number' value={amount} onChange={(event)=>{
                setAmount(Number.parseFloat(event.target.value))
              }}  />
              </GroupBox>
              <GroupBox label='ETH'>
               <TextInput    type='number' value={eth} onChange={(event)=>{
                 setEth(Number.parseFloat(event.target.value))
                }}  />
                </GroupBox>
            </GroupBox>
            <Button
            onClick={async()=>{
              if(selectedPool){
                const contract = await exchangeContract(selectedPool?.exchangeAddress)
                
                contract?.call('addLiquidity', [ethers.BigNumber.from(amount),{value:ethers.utils.parseEther(eth.toString())}]).then(console.log)
              }
            }}
              style={{
                flex: 1,
              }}
            >
              Add liqudity
            </Button>
          </div>
        </GroupBox>
      </TabBody>
    </>
  );
}
