import Asc from "@assets/icons/Asc";
import Desc from "@assets/icons/Desc";
import { useThemeContext } from "@contexts/themeContext";
import themeColors from "@utils/theme";
import { FC, useEffect, useState } from "react";
import StyledSelectInput from "./SelectInput.styled";

interface Option {
  label: string;
  value: string;
}

interface Value {
  sort: "asc" | "desc";
  sortBy: string;
}

interface Props {
  width: number;
  height: number;
  options: Option[];
  label: string | JSX.Element;
  onChange: (value: Value) => void;
}

const SelectSortInput: FC<Props> = ({
  width,
  height,
  options,
  onChange,
  label,
}) => {
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<string>("name");
  const { theme } = useThemeContext();
  const toggleSort = () => {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  };

  useEffect(() => {
    if (sort && sortBy) {
      console.log({ sort, sortBy });
      onChange({ sort, sortBy });
    }
  }, [sort, sortBy]);

  return (
    <StyledSelectInput theme={theme} height={height} width={width}>
      <button onClick={toggleSort} disabled={sortBy === "-"}>
        {sort === "asc" ? <Asc size={20} /> : <Desc size={20} />}
      </button>
      <select
        id="sortBy"
        onChange={(e) => setSortBy(e.target.value)}
        style={{ width, height }}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </StyledSelectInput>
  );
};

export default SelectSortInput;
