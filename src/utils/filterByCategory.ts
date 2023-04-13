export const filterByCategory = (
  arr: string[],
  category: string,
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
): void => {
  arr.indexOf(category) !== -1
    ? setFilters(arr.filter((e) => e !== category))
    : setFilters([...arr, category]);
};
