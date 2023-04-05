import React from 'react';
import css from './Sort.module.scss'
import Dropdown from "../../../ui/Dropdown/Dropdown";
import {DROPDOWN_OPTIONS} from "../../../constants";

interface ISort {
    filterState: any;
}

const Sort: React.FC<ISort> = ({filterState}) => {

    const handleSortItems = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        e.preventDefault()
        const value = e.target.value
        filterState.setCurrentSort(value)
    }

    return(
        <div className = {css.dropdown}>
            <span>
                Сортировка:
            </span>
            <Dropdown
                sortName = {filterState.currentSort}
                sortNameHandler = {(e) => handleSortItems(e)}
                options = {DROPDOWN_OPTIONS}
            />
        </div>
    )
}

export default Sort