import React from 'react';
import css from './Dropdown.module.scss'

interface IDropdownProps {
    options: {
        value: string,
        name: string
    }[]
}

const Dropdown: React.FC<IDropdownProps> = ({options}) => {
    return(
        <select className = {css.dropdown}>
            {options.map(e =>
                <option key = {e.value} value = {e.value}>
                    {e.name}
                </option>
            )}
        </select>
    )
}

export default Dropdown