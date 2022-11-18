import dynamic from "next/dynamic";
import Image from "next/image";
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
];

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
      <Button
        active={value}
        onClick={setTrue}
        style={{
          fontWeight: "bold",
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
        <span>OgSwap</span>
      </Button>
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
          </WindowContent>
        </Window>
      </Draggable>
    </Wrapper>
  );
}
