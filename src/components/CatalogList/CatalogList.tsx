import React, {useEffect, useRef} from 'react';
import css from './CatalogList.module.scss';
import Breadcrumbs from '../../ui/Breadcrumbs/Breadcrumbs';
import {CATALOG, PAGES} from '../../constants';
import BackArrow from '../../ui/BackArrow/BackArrow';
import {choosePage} from '../../utils';
import useFilterState from '../../hooks/useFilterState';
import CategoriesFilters from '../Filters/CategoriesFilter/CategoriesFilter';
import Sort from '../Filters/Sort/Sort';
import ProductList from '../ProductList/ProductList';
import {
    useActions, 
    useTypedSelector, 
    useClickOutside} 
from '../../hooks';

const CatalogList: React.FC = () => {
    
    const filterState = useFilterState()
    const {items, page, limit} = useTypedSelector(state => state.catalog)
    let {brands} = useTypedSelector(state => state.brand)
    const {fetchCatalog, setCatalogPage, setCurrentBrands} = useActions()
    const wrapperRef: any = useRef(null)

    useClickOutside(wrapperRef, filterState.setOpen)

    useEffect(() => {
        setCurrentBrands(countProducts, brands)
        if (items.length === 0) fetchCatalog(page, limit)
    }, [
        filterState.categoriesFilter, 
        filterState.minQuery,
        filterState.maxQuery,
        filterState.query,
        filterState.showAll
    ])
    
    let filteredItems = [...items]
    
    for (let i = 0; i < filterState.categoriesFilter.length; i++){
        filteredItems = filteredItems.filter(e => 
            e.categories.indexOf(filterState.categoriesFilter[i]) !== -1
        )
    }

    switch (filterState.currentSort) {
        case 'name':
            filteredItems = filteredItems.sort((a, b) => a.title.localeCompare(b.title))
            break
        case 'nameReverse':
            filteredItems = filteredItems.sort((a, b) => a.title.localeCompare(b.title)).reverse()
            break
        case 'price':
            filteredItems = filteredItems.sort((a, b) => a.price - b.price).reverse()
            break
        case 'priceReverse':
            filteredItems = filteredItems.sort((a, b) => a.price - b.price)
            break
    }

    const countProducts = filteredItems
        .filter(e => e.brand.toLowerCase().includes(filterState.query.toLowerCase()))
        .filter(e => e.price >= filterState.minQuery && e.price <= filterState.maxQuery)
        .filter(e => filterState.brandsFilter.indexOf(e.brand) !== -1 || !filterState.brandsFilter.length)
    
    const resultArray = countProducts.slice((page - 1) * limit, limit * page)

    const setRequestData = (): void => {
        choosePage(1, setCatalogPage)
        filterState.setQuery(filterState.findBrand)
        filterState.setMinQuery(filterState.min)
        filterState.setMaxQuery(filterState.max)
        filterState.setOpen(false)
    }
    
    return(
        <div className = {css.container} ref = {wrapperRef}>
            <div className = {css.content}>
                <Breadcrumbs 
                    links = {[{title: 'Каталог', link: CATALOG}]} 
                />
                <BackArrow />
                <div className = {css.head}>
                    <h2>
                        Косметика и гигиена
                    </h2>
                    <Sort 
                        filterState = {filterState}
                    />
                </div>
                <CategoriesFilters filterState = {filterState}/>
                <ProductList 
                    filterState = {filterState} 
                    resultArray = {resultArray}
                    setRequestData = {setRequestData}
                />
                <div className = {css.pagination}>
                    {countProducts.length > limit &&
                        PAGES.map(e =>
                        <div key = {e}
                             onClick = {() => choosePage(e, setCatalogPage, page, countProducts, limit)}
                             className = {
                                 e === page ?
                                     `${css.activePage}` :
                                     ''
                             }
                        >
                            {e}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CatalogList;