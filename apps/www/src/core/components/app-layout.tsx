import {
  ConnectWallet,
  useAddress,
  useCoinbaseWallet,
  useConnect,
  useMetamask,
  useNetwork,
  useWalletConnect,
} from "@thirdweb-dev/react";
import { ChainId, SUPPORTED_CHAIN_IDS } from "@thirdweb-dev/sdk";
import { atom, useAtom } from "jotai";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef } from "react";
import {
  Button,
  Counter,
  Frame,
  Handle,
  MenuList,
  MenuListItem,
  Tab,
  TabBody,
  Tabs,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import styled from "styled-components";
import { useBoolean, useOnClickOutside, useWindowSize } from "usehooks-ts";

const Draggable = dynamic(() => import("react-draggable"), { ssr: false });

const routes = [
  {
    path: "/",
    name: "Swap",
    icon: "/assets/netmeeting-2.png",
  },
  {
    path: "/pool",
    name: "Pools",
    icon: "/assets/cardfile-1.png",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "/assets/settings_gear_cool-5.png",
  },
  {
    path: "/about",
    name: "About",
    icon: "/assets/help_book_small-2.png",
  },
];

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.desktopBackground};
`;

function ConnectButton() {
  const { setFalse, setTrue, value } = useBoolean();
  const connectWithMetamask = useMetamask();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithWalletConnect = useWalletConnect();

  const ref = useRef(null);

  useOnClickOutside(ref, setFalse);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Button variant="menu" size="sm" onClick={setTrue}>
        Connect
      </Button>
      {value && (
        <MenuList
          ref={ref}
          style={{
            zIndex: 100,
            top: "100%",
            left: 0,
            position: "absolute",
          }}
        >
          <MenuListItem
            onClick={connectWithMetamask}
            style={{
              cursor: "pointer",
            }}
          >
            MetaMask
          </MenuListItem>
          <MenuListItem
            onClick={connectWithCoinbaseWallet}
            style={{
              cursor: "pointer",
            }}
          >
            Coinbase Wallet
          </MenuListItem>
          <MenuListItem
            onClick={connectWithWalletConnect}
            style={{
              cursor: "pointer",
            }}
          >
            WalletConnect
          </MenuListItem>
        </MenuList>
      )}
    </div>
  );
}


export function AppLayout({ children }: { children: ReactNode }) {
  const { height, width } = useWindowSize();
  const router = useRouter();
  const currentRoute = router.pathname;
  const address = useAddress();
  const [network, switchNetwork] = useNetwork();

  return (
    <Wrapper>
      <Draggable
        defaultPosition={{
          y: height / 4,
          x: width / 4,
        }}
      >
        <Window
          style={{
            resize: "both",
            position: "relative",
            maxWidth: "36rem",
          }}
        >
          <WindowHeader
            style={{
              cursor: "grab",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem 0.5rem",
            }}
          >
            <Image
              src="/assets/regedit-0.png"
              alt="Logo Icon"
              width={32}
              height={32}
            />
            <span>OgSwap.exe</span>
          </WindowHeader>
          <Toolbar>
            <ConnectButton />
            <Button variant="menu" size="sm" disabled>
              Logout
            </Button>
          </Toolbar>
          <WindowContent>
            <Tabs value={currentRoute}>
              {routes.map((route) => (
                <Link key={route.path} href={route.path}>
                  <Tab
                    selected={currentRoute === route.path}
                    value={route.path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      paddingLeft: "0.25rem",
                      paddingRight: "1rem",
                    }}
                  >
                    <Image
                      src={route.icon}
                      alt={route.name}
                      width={32}
                      height={32}
                    />
                    <span>{route.name}</span>
                  </Tab>
                </Link>
              ))}
            </Tabs>
            <TabBody>{children}</TabBody>
            <Frame
              variant="status"
              style={{
                width: "100%",
                marginTop: "2rem",
                padding: "0.5rem 1rem",
              }}
            >
              {address && !network.loading && (
                <div
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Connected to{" "}
                  
                    {network.data.chain?.name}
                  {" "}
                  {address}
                </div>
              )}
            </Frame>
          </WindowContent>
        </Window>
      </Draggable>
    </Wrapper>
  );
}
