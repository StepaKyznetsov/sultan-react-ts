import React, {useEffect, useState} from 'react';
import css from './ProductList.module.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import ProductCard from '../ProductCard/ProductCard';
import Breadcrumbs from '../../ui/Breadcrumbs/Breadcrumbs';
import Dropdown from '../../ui/Dropdown/Dropdown';
import {CATALOG} from '../../constants/constants';
import BackArrow from "../../ui/BackArrow/BackArrow";

const ProductList: React.FC = () => {

    const [min, setMin] = useState('0')
    const [max, setMax] = useState('10000')
    const {items, error, loading, page, limit} = useTypedSelector(state => state.catalog)
    const [categoriesFilter, setCategoriesFilter] = useState<string[]>([])
    const [currentSort, setCurrentSort] = useState<string>('name')
    const {fetchCatalog, setCatalogPage} = useActions()
    const pages = [1, 2, 3, 4, 5]
    let currentLimit = limit

    useEffect(() => {
        if (items.length === 0) fetchCatalog(page, currentLimit)
    }, [page])

    let filteredItems = [...items]

    const filteredByCategory = (category: string) => {
        choosePage(1)
        categoriesFilter.indexOf(category) !== -1 ?
            setCategoriesFilter(categoriesFilter.filter(e => e !== category)) :
            setCategoriesFilter([...categoriesFilter, category])
    }

    for (let i = 0; i < categoriesFilter.length; i++){
        filteredItems = filteredItems.filter(e => e.categories.indexOf(categoriesFilter[i]) !== -1)
    }

    const sortItems = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const value = e.target.value
        setCurrentSort(value)
    }

    switch (currentSort) {
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

    const countProducts = filteredItems.filter(e => e.price >= min && e.price <= max)
    let res = countProducts.slice((page - 1) * limit, limit * page)

    const choosePage = (p: number): void => {
        if (p === page || p > Math.ceil((countProducts.length / limit))) 
            return
        setCatalogPage(p)
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
                <BackArrow />
                <div className = {css.head}>
                    <h2>
                        Косметика и гигиена
                    </h2>
                    <div className = {css.dropdown}>
                        <span>
                            Сортировка:
                        </span>
                        <Dropdown
                            sortName = {currentSort}
                            sortNameHandler = {(e) => sortItems(e)}
                            options = {[
                                {
                                    value: 'name',
                                    name: 'Название'
                                },
                                {
                                    value: 'nameReverse',
                                    name: 'Название(обратный порядок)'
                                },
                                {
                                    value: 'price',
                                    name: 'Цена(убывание)'
                                },
                                {
                                    value: 'priceReverse',
                                    name: 'Цена(возрастание)'
                                }
                            ]}
                        />
                    </div>
                </div>
                <div className = {css.categories}>
                    <button
                        className = {
                            categoriesFilter.indexOf('Уход за телом') !== -1 ?
                                `${css.activeButton}` :
                                ''
                        }
                        onClick={() => filteredByCategory('Уход за телом')}
                    >
                       <span>
                            Уход <br />
                            за телом
                        </span> 
                    </button>
                    <button
                        className = {
                            categoriesFilter.indexOf('Уход за руками') !== -1 ?
                                `${css.activeButton}` :
                                ''
                        }
                        onClick={() => filteredByCategory('Уход за руками')}
                    >
                        <span>
                            Уход <br />
                            за руками
                        </span>
                    </button>
                </div>
                <div className = {css.main}>
                    <div className = {css.filters}>
                        <div className = {css.params}>
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
                        </div>
                        <div>
                            <h4>
                                Производитель
                            </h4>
                        </div>
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
                    {countProducts.length > limit &&
                        pages.map(e =>
                        <div key = {e}
                             onClick = {() => choosePage(e)}
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