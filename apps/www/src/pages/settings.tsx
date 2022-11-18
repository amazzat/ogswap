import { GroupBox, Select } from "react95";
import themes from "react95/dist/themes";
import styled from "styled-components";
import { ThemeName, useCurrentTheme } from "../core/theme-context";

const themeOptions = Object.keys(themes).map((theme) => ({
  value: theme,
  label: theme,
}));

const StyledSelect = styled(Select)`
  min-width: 24ch;
`;

function ThemeSwitcher() {
  const { theme, setTheme } = useCurrentTheme();

  return (
    <GroupBox label="Theme">
      <StyledSelect
        menuMaxHeight={160}
        value={theme}
        onChange={(option) => {
          setTheme(option.value as ThemeName);
        }}
        options={themeOptions}
      />
    </GroupBox>
  );
}

export default function Settings() {
  return (
    <div>
      <ThemeSwitcher />
    </div>
  );
}
