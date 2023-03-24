import React, {useEffect} from 'react';
import css from './ProductList.module.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchCatalog} from "../../store/action-creators/catalog";
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

    const {items, error, loading, page, limit} = useTypedSelector(state => state.catalog)
    const {fetchCatalog, setCatalogPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchCatalog(page, limit)
    }, [page])

    const choosePage = (p: number): void => {
        if (p === page || p > Math.ceil(items.length / limit)) return
        setCatalogPage(p)
    }

    let res = items.slice((page - 1) * limit, limit * page)

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
                    <div>
                       <span>
                            Уход <br />
                            за телом
                        </span> 
                    </div>
                    <div>
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
                                placeholder = '0'
                                type="number" 
                            />
                            <span>
                                -
                            </span>
                            <input
                                placeholder = '10000'
                                type="number" 
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
                    {pages.map(e =>
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