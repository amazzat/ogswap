import {
  Button,
  Frame,
  GroupBox,
  NumberInput,
  Select,
  TextInput,
  Tooltip,
} from "react95";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const FlexItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function Exchange() {
  return (
    <div>
      <GroupBox label="Swap tokens">
        <Flex>
          <FlexItem>
            <Select
              options={[
                {
                  value: "ETH",
                  label: "ETH",
                },
              ]}
            />
            <TextInput />
          </FlexItem>
          <Tooltip
            text="Click to swap positions"
            enterDelay={300}
            leaveDelay={150}
          >
            <Button size="sm" variant="thin">
              To
            </Button>
          </Tooltip>
          <FlexItem>
            <Select
              options={[
                {
                  value: "ETH",
                  label: "ETH",
                },
              ]}
            />
            <TextInput />
          </FlexItem>
        </Flex>
      </GroupBox>
      <Button
        fullWidth
        style={{
          marginTop: "0.5rem",
        }}
      >
        Swap
      </Button>
      <Frame
        variant="status"
        style={{ width: "100%", marginTop: "2rem", padding: "0.5rem 1rem" }}
      >
        Status: Online
      </Frame>
    </div>
  );
}
