import { useMemo, useState } from "react";
import styled from "styled-components";
import { GuideFilterDataType } from "types/guide/guide";
import { FilterSearch } from "./FilterSearch";
import { FilterLists } from "./FilterLists";

// 🔹 Tab, search, lists 조합
interface TabSearchListsPropsType{
  data: GuideFilterDataType[];
  searchPlaceholder?:string;
  clickEvent: (ID:string) => void;
}
export const TabSearchLists = ({
  data, searchPlaceholder,
  clickEvent
}: TabSearchListsPropsType) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (searchCategory:any) => { // -1 : All , 그 외 value
    const isAll = searchCategory === '전체' || searchCategory === 'All';
    setFilter(isAll ? '' : searchCategory);
  }

  const filterLists = useMemo(() => {
    return filter
      ? data.filter(item => item.category === filter)
      : data;
  }, [filter]);

  const handleItemClick = (ID: string) => {
    clickEvent(ID)
  }
  return(
    <>
      <FilterSearch 
        data={data}
        searchPlaceholder={searchPlaceholder || undefined}
        changeEvent={handleFilterChange}
      />
      <FilterLists 
        data={filterLists}
        clickEvent={handleItemClick}
      />
    </>
  )
}