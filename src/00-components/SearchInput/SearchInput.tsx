import { useThemeContext } from "@contexts/themeContext";
import { FC, useState } from "react";
import StyledSearchInput from "./SearchInput.styled";

interface Props {
  width: number;
  height: number;
  onInput: (value: string) => void;
}

const SearchInput: FC<Props> = ({ width, height, onInput }) => {
  const { theme } = useThemeContext();
  const [value, setValue] = useState<string>("");
  return (
    <StyledSearchInput
      width={width}
      height={height}
      theme={theme}
      onInput={() => onInput(value)}
    >
      <input
        type="text"
        placeholder="Search a planet"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </StyledSearchInput>
  );
};

export default SearchInput;
