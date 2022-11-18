import { MenuList, MenuListItem, Separator } from "react95";

export default function Home() {
  return (
    <MenuList>
      <MenuListItem>🎤 Sing</MenuListItem>
      <MenuListItem>💃🏻 Dance</MenuListItem>
      <Separator />
      <MenuListItem disabled>😴 Sleep</MenuListItem>
    </MenuList>
  );
}
