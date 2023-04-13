import { useState } from "react";

export default function useFilterState() {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(10000);
  const [minQuery, setMinQuery] = useState<number>(0);
  const [maxQuery, setMaxQuery] = useState<number>(10000);
  const [categoriesFilter, setCategoriesFilter] = useState<string[]>([]);
  const [currentSort, setCurrentSort] = useState<string>("name");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [brandsFilter, setBrandsFilter] = useState<string[]>([]);
  const [findBrand, setFindBrand] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  return {
    min,
    setMin,
    max,
    setMax,
    minQuery,
    setMinQuery,
    maxQuery,
    setMaxQuery,
    categoriesFilter,
    setCategoriesFilter,
    currentSort,
    setCurrentSort,
    showAll,
    setShowAll,
    open,
    setOpen,
    brandsFilter,
    setBrandsFilter,
    findBrand,
    setFindBrand,
    query,
    setQuery,
  };
}
