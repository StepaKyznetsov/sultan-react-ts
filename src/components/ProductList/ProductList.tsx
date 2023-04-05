import React, {useEffect, useRef} from 'react';
import css from './ProductList.module.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import ProductCard from "../ProductCard/ProductCard";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import {CATALOG, PAGES} from "../../constants";
import BackArrow from "../../ui/BackArrow/BackArrow";
import {useClickOutside} from '../../hooks/useClickOutside';
import {getBrands, choosePage} from '../../utils';
import useFilterState from "../../hooks/useFilterState"
import {Brand} from '../../types/brand';
import BrandsFilter from '../Filters/BrandsFilter/BrandsFilter';
import CategoriesFilters from '../Filters/CategoriesFilter/CategoriesFilter';
import PriceFilter from '../Filters/PriceFilter/PriceFilter';
import SideBarFilters from '../Filters/SideBarFilters/SideBarFilters';
import Sort from '../Filters/Sort/Sort';

const ProductList: React.FC = () => {

    const filterState = useFilterState()
    const {items, page, limit} = useTypedSelector(state => state.catalog)
    const {fetchCatalog, setCatalogPage} = useActions()
    const wrapperRef: any = useRef(null)

    useClickOutside(wrapperRef, filterState.setOpen)

    useEffect(() => {
        if (items.length === 0) fetchCatalog(page, currentLimit)
    }, [page])

    let currentLimit = limit
    let brands: Brand[] = []
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
        .filter(e => filterState.brandsDefault.indexOf(e.brand) !== -1 || !filterState.brandsDefault.length)
        .filter(e => filterState.categoriesFilter.indexOf(e) === -1)
    
    const res = countProducts.slice((page - 1) * limit, limit * page)
    
    !filterState.changeBrands ? 
        getBrands(items, brands) : 
        getBrands(countProducts, brands)

    if (!filterState.showAll) brands = brands.slice(0, 4)

    const setRequestData = () => {
        choosePage(1, setCatalogPage)
        filterState.setQuery(filterState.findBrand)
        filterState.setMinQuery(filterState.min)
        filterState.setMaxQuery(filterState.max)
        filterState.setOpen(false)
        filterState.setChangeBrands(true)
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
                <div className = {css.main}>
                    <div className = {css.filters}>
                        <div className = {css.params}>
                            <div className = {css.openMenu}>
                                <h4>
                                    ПОДБОР ПО ПАРАМЕТРАМ
                                </h4>
                                <button 
                                    onClick = {() => filterState.setOpen(!filterState.open)}
                                    className = {css.burger}>
                                    <img 
                                        src = {
                                            filterState.open ? 
                                            '/images/catalog/close.png' : 
                                            '/images/catalog/open.png'
                                        } 
                                        alt = "burger" 
                                    />
                                </button>
                            </div>
                            <div className = {
                                    filterState.open ? 
                                    `${css.priceInput}` : 
                                    `${css.priceInput} ${css.hiddenContent}`
                                }
                            >
                                <div>
                                    <span className = {css.price}>
                                        Цена
                                    </span>
                                    <span className = {css.currency}>
                                        ₸
                                    </span>
                                </div>
                                <PriceFilter 
                                    filterState = {filterState}
                                    setRequestData = {setRequestData}
                                />
                            </div>
                        </div>
                        <div className = {css.brand}>
                            <BrandsFilter 
                                brands = {brands}
                                filterState = {filterState}
                                setRequestData = {setRequestData}
                            />
                            <SideBarFilters 
                                filterState = {filterState}
                            />
                        </div>
                    </div>
                    {!res.length ?
                        <h2 className = {css.emptyList}>
                            Подходящих товаров не нашлось
                        </h2> :
                        <div className = {css.cards}>
                            {res.map(e =>
                                <ProductCard
                                    key = {e.id}
                                    title = {e.title}
                                    photo = {e.photo}
                                    size = {e.size}
                                    brand = {e.brand}
                                    barcode = {e.barcode}
                                    manufacturer = {e.manufacturer}
                                    price = {e.price}
                                    sizeType = {e.sizeType}
                                />
                            )}
                        </div>
                    }
                </div>
                <div className = {css.pagination}>
                    {countProducts.length > limit &&
                        PAGES.map(e =>
                        <div key = {e}
                             onClick = {() => choosePage(e, setCatalogPage, page, countProducts, currentLimit)}
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

export default ProductList;