import React from 'react';
import css from './ProductList.module.scss';
import BrandsFilter from '../Filters/BrandsFilter/BrandsFilter';
import PriceFilter from '../Filters/PriceFilter/PriceFilter';
import SideBarFilters from '../Filters/SideBarFilters/SideBarFilters';
import ProductCard from '../ProductCard/ProductCard';
import {ICardProps} from '../ProductCard/ProductCard';

interface IProductList {
    filterState: any;
    resultArray: ICardProps[];
    setRequestData(): void;
}

const ProductList: React.FC<IProductList> = ({
    filterState, 
    resultArray, 
    setRequestData,
}) => {

    return (
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
                        filterState = {filterState}
                        setRequestData = {setRequestData}
                    />
                    <SideBarFilters 
                        filterState = {filterState}
                    />
                </div>
            </div>
            {!resultArray.length ?
                <h2 className = {css.emptyList}>
                    Подходящих товаров не нашлось
                </h2> :
                <div className = {css.cards}>
                    {resultArray.map(e =>
                        <ProductCard
                            key = {e.id}
                            id = {e.id}
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
    )
}

export default ProductList;