import React from 'react'
import css from './CategoriesFilter.module.scss'
import {filterByCategory} from '../../../utils';
import {choosePage} from '../../../utils';
import {useActions} from '../../../hooks/useActions';

interface ICategoriesFilter {
    filterState: any
}

const CategoriesFilters: React.FC<ICategoriesFilter> = ({filterState}) => {

    const {setCatalogPage} = useActions()

    return (
        <div className = {css.categories}>
            <button
                className = {
                    filterState.categoriesFilter.indexOf('Уход за телом') !== -1 ?
                        `${css.activeButton}` :
                        ''
                }
                onClick={() => {
                        choosePage(1, setCatalogPage)
                        filterByCategory(filterState.categoriesFilter, 'Уход за телом', filterState.setCategoriesFilter)
                    }
                }
            >
                <span>
                    Уход <br />
                    за телом
                </span> 
            </button>
            <button
                className = {
                    filterState.categoriesFilter.indexOf('Уход за руками') !== -1 ?
                        `${css.activeButton}` :
                        ''
                }
                onClick={() => {
                        choosePage(1, setCatalogPage)
                        filterByCategory(filterState.categoriesFilter, 'Уход за руками', filterState.setCategoriesFilter)
                    }
                }
            >
                <span>
                    Уход <br />
                    за руками
                </span>
            </button>
        </div>
    )
}

export default CategoriesFilters