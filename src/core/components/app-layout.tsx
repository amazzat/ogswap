import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useRef } from "react";
import {
  Anchor,
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
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
  },
  {
    path: "/pool",
    name: "Liqudity Pool",
  },
  {
    path: "/settings",
    name: "Settings",
  },
];

const LogoButton = styled(Button)`
  font-weight: bold;
`;

const LogoMenu = styled(MenuList)`
  position: absolute;
  left: 0;
  top: 100%;
`;

function Logo() {
  const ref = useRef(null);
  const { value, setFalse, setTrue } = useBoolean();

  useOnClickOutside(ref, setFalse);

  return (
    <>
      <LogoButton active={value} onClick={setTrue}>
        OgSwap
      </LogoButton>
      {value && (
        <LogoMenu ref={ref}>
          <MenuListItem>
            <Link href="/">
              <Anchor>About</Anchor>
            </Link>
          </MenuListItem>
          <Separator />
          <MenuListItem>
            <Link href="/">
              <Anchor>Telegram</Anchor>
            </Link>
          </MenuListItem>
          <MenuListItem>
            <Link href="/">
              <Anchor>Github</Anchor>
            </Link>
          </MenuListItem>
          <Separator />
          <MenuListItem>A&E CS2005</MenuListItem>
        </LogoMenu>
      )}
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.desktopBackground};
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export function AppLayout({ children }: { children: ReactNode }) {
  const { height, width } = useWindowSize();
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Wrapper>
      <AppBar position="static">
        <StyledToolbar>
          <Logo />
        </StyledToolbar>
      </AppBar>
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
            height: "48rem",
          }}
        >
          <WindowHeader
            style={{
              cursor: "grab",
            }}
          >
            OgSwap.exe
          </WindowHeader>
          <WindowContent>
            <Tabs value={currentRoute}>
              {routes.map((route) => (
                <Link key={route.path} href={route.path}>
                  <Tab
                    selected={currentRoute === route.path}
                    value={route.path}
                  >
                    {route.name}
                  </Tab>
                </Link>
              ))}
            </Tabs>
            <TabBody>{children}</TabBody>
          </WindowContent>
        </Window>
      </Draggable>
    </Wrapper>
  );
}
