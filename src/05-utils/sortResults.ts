export const sortResults = (
  results: any[],
  sortBy: string,
  order: "asc" | "desc",
  onSort: (value: any[]) => void
) => {
  const reverse = order === "asc" ? 1 : -1;
  if (sortBy === "-") {
    onSort(results);
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
