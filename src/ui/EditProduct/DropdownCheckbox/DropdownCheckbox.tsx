import React from 'react';
import css from './DropdownCheckbox.module.scss';

interface IDropdownCheckbox {
    currentCategories: string[];
    setCategories(e: React.ChangeEvent<HTMLInputElement>): void;
}

const DropdownCheckbox: React.FC<IDropdownCheckbox> = ({
    currentCategories, 
    setCategories
}) => {
    return(
        <div className = {css.dropdownCheckbox}>
            <label className = {css.labelTitle}>
                Тип ухода
            </label>
            <ul>
                <li>
                    <label>
                        <input
                            name = "categories"
                            checked = {currentCategories.indexOf('Уход за руками') !== -1}
                            type = "checkbox"
                            onChange = {setCategories}
                            value = "Уход за руками"
                        />
                        Уход за руками
                    </label>
                </li>
                <li>
                    <label>
                        <input
                            name = "categories"
                            checked = {currentCategories.indexOf('Уход за телом') !== -1}
                            type = "checkbox"
                            onChange = {setCategories}
                            value = "Уход за телом"
                        />
                        Уход за телом
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default DropdownCheckbox