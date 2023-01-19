export const sortResults = (
  results: any[],
  sortBy: string,
  order: "asc" | "desc",
  onSort: (value: any[]) => void,
  resetFunc: () => void
) => {
  const reverse = order === "asc" ? 1 : -1;
  if (sortBy === "-") {
    resetFunc();
    return;
  }
  const sortedData = [...results].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1 * reverse;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1 * reverse;
    }
    return 0;
  });
  onSort(sortedData);
};
