import React, {useEffect, useState} from 'react';
import css from './ProductList.module.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import ProductCard from '../ProductCard/ProductCard';
import Breadcrumbs from '../../ui/Breadcrumbs/Breadcrumbs';
import Dropdown from '../../ui/Dropdown/Dropdown';
import {CATALOG} from '../../constants/constants';

const styles = {
    active: {
        'background': 'linear-gradient(90deg, rgba(255, 198, 80, 0.3) 0%, rgba(254, 202, 110, 0.3) 97.25%)',
        'borderRadius': '1000px'
    },
    none: {}
}

const ProductList: React.FC = () => {

    const [min, setMin] = useState('0')
    const [max, setMax] = useState('10000')
    const {items, error, loading, page, limit} = useTypedSelector(state => state.catalog)
    const {fetchCatalog, setCatalogPage} = useActions()
    const pages = [1, 2, 3, 4, 5]
    
    useEffect(() => {
        if (items.length === 0) fetchCatalog(page, limit)
    }, [page])

    const countProducts = items.filter(e => e.price >= min && e.price <= max)
    let res = countProducts.slice((page - 1) * limit, limit * page)
    
    const choosePage = (p: number): void => {
        if (p === page || p > Math.ceil((countProducts.length / limit))) 
            return
        setCatalogPage(p)
    }

    const filterCategory = (type: string): void => {
        res = res.filter(e => e.categories.indexOf(type) !== -1)
    }

    return(
        <div className = {css.container}>
            <div className = {css.content}>
                <Breadcrumbs 
                    links = {[
                        {
                            title: 'Каталог', 
                            link: CATALOG
                        }
                    ]} 
                />
                <div className = {css.head}>
                    <h2>
                        Косметика и гигиена
                    </h2>
                    <div className = {css.dropdown}>
                        <span>
                            Сортировка:
                        </span>
                        <Dropdown
                            options = {[
                                {value: 'name', name: 'Название'},
                                {value: 'price', name: 'Цена'}
                            ]}
                        />
                    </div>
                </div>
                <div className = {css.categories}>
                    <div onClick={() => filterCategory('Уход за телом')}>
                       <span>
                            Уход <br />
                            за телом
                        </span> 
                    </div>
                    <div onClick={() => filterCategory('Уход за руками')}>
                        <span>
                            Уход <br />
                            за руками
                        </span>
                    </div>
                </div>
                <div className = {css.main}>
                    <div className = {css.filters}>
                        <h4>
                            ПОДБОР ПО ПАРАМЕТРАМ
                        </h4>
                        <span className = {css.price}>
                            Цена
                        </span>
                        <span className = {css.currency}>
                            ₸
                        </span>
                        <div className = {css.priceFilter}>
                            <input
                                value = {min}
                                type = 'string'
                                onChange = {(e) => setMin(e.target.value)}
                            />
                            <span>
                                -
                            </span>
                            <input
                                value = {max}
                                type = 'string'
                                onChange = {(e) => setMax(e.target.value)}
                            />  
                        </div>
                        <h4>
                            Производитель
                        </h4>
                    </div>
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
                            />
                    )}
                    </div>
                </div>
                <div className = {css.pagination}>
                    {countProducts.length > 15 &&
                        pages.map(e =>
                        <div key = {e}
                            onClick = {() => choosePage(e)}
                            style = {e === page ? styles.active : styles.none}
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