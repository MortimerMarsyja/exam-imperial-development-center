import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledPagination from "./Pagination.styled";

interface Props {
  previous: string | null;
  loading: boolean;
  next: string | null;
  current: number;
  total: number;
  handlePrevPage: (prev: string | null) => void;
  handleNextPage: (next: string | null) => void;
  elementsPerPage: number;
}

const Pagination: FC<Props> = ({
  loading,
  previous,
  next,
  current,
  total,
  handleNextPage,
  handlePrevPage,
  elementsPerPage,
}) => {
  const calculateTotalPages = () => {
    if (total === 0) return 0;
    if (total && elementsPerPage === 0) return 1;
    if (total && elementsPerPage) {
      return Math.ceil(total / elementsPerPage);
    }
  };
  const { theme } = useThemeContext();
  return (
    <StyledPagination theme={theme}>
      <div className="content">
        <button
          disabled={previous === null || loading}
          onClick={() => handlePrevPage(previous)}
        >
          Prev
        </button>
        <p>{current}</p>
        <button
          disabled={next === null || loading}
          onClick={() => handleNextPage(next)}
        >
          Next
        </button>
        of <p>{calculateTotalPages()}</p>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
