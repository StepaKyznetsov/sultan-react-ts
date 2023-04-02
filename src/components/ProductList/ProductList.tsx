import React, {useEffect, useState} from 'react';
import css from './ProductList.module.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import ProductCard from "../ProductCard/ProductCard";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import Dropdown from "../../ui/Dropdown/Dropdown";
import {CATALOG} from "../../constants/constants";
import BackArrow from "../../ui/BackArrow/BackArrow";

interface Brand {
    name: string;
    counter: number;
}

const ProductList: React.FC = () => {

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(10000)
    const [minQuery, setMinQuery] = useState<number>(0)
    const [maxQuery, setMaxQuery] = useState<number>(10000)
    const {items, error, loading, page, limit} = useTypedSelector(state => state.catalog)
    const [categoriesFilter, setCategoriesFilter] = useState<string[]>([])
    const [currentSort, setCurrentSort] = useState<string>('name')
    const [showAll, setShowAll] = useState<boolean>(false)
    const [currentBrands, setCurrentBrands] = useState<string[]>([])
    const [findBrand, setFindBrand] = useState<string>('')
    const [query, setQuery] = useState<string>('')
    const {fetchCatalog, setCatalogPage} = useActions()

    const pages = [1, 2, 3, 4, 5]

    let currentLimit = limit

    let filteredItems = [...items]

    useEffect(() => {
        if (items.length === 0) fetchCatalog(page, currentLimit)
    }, [page])

    const removeRes = () => {
        setQuery('')
        setFindBrand('')
        setMinQuery(0)
        setMaxQuery(10000)
        setMin(0)
        setMax(10000)

    }

    const filteredByCategory = (category: string) => {
        choosePage(1)
        categoriesFilter.indexOf(category) !== -1 ?
            setCategoriesFilter(categoriesFilter.filter(e => e !== category)) :
            setCategoriesFilter([...categoriesFilter, category])
    }

    let brands: Brand[] = []

    const getBrands = () => {
        filteredItems.map(item => {
            if (!brands.filter(e => e.name === item.brand).length)
                brands.push({
                    name: item.brand,
                    counter: 1
                })
            else {
                let obj: Brand | undefined = brands.find(e => e.name === item.brand)
                if (!obj) return
                obj.counter += 1
            }
        })
        return showAll ? brands : brands = brands.slice(0, 4)
    }

    getBrands()

    const handleFindBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const value = e.target.value
        setFindBrand(value)
    }

    const handleSortItems = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        e.preventDefault()
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

    const handleBrands = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        if (!currentBrands.filter(e => e === value).length) setCurrentBrands([...currentBrands, value])
        else setCurrentBrands(currentBrands.filter(e => e !== value))
    }
    for (let i = 0; i < categoriesFilter.length; i++){
        filteredItems = filteredItems.filter(e => e.categories.indexOf(categoriesFilter[i]) !== -1)
    }

    const countProducts = filteredItems
        .filter(e => e.brand.toLowerCase().includes(query.toLowerCase()))
        .filter(e => e.price >= minQuery && e.price <= maxQuery)
        .filter(e => currentBrands.indexOf(e.brand) !== -1 || !currentBrands.length)
        .filter(e => categoriesFilter.indexOf(e) === -1)

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
                            sortNameHandler = {(e) => handleSortItems(e)}
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
                            <div>
                                <span className = {css.price}>
                                    Цена
                                </span>
                                <span className = {css.currency}>
                                    ₸
                                </span>
                            </div>
                            <div className = {css.priceFilter}>
                                <input
                                    value = {min}
                                    type = 'number'
                                    onChange = {(e) => setMin(Number(e.target.value))}
                                />
                                <span>
                                    -
                                </span>
                                <input
                                    value = {max}
                                    type = 'number'
                                    onChange = {(e) => setMax(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className = {css.brand}>
                            <div>
                                <h4>
                                    Бренд
                                </h4>
                                <div className = {css.inputBlock}>
                                    <input
                                        placeholder = 'Поиск...'
                                        type = "text"
                                        onChange = {handleFindBrand}
                                        value = {findBrand}
                                    />
                                    <img
                                        className = {css.icon}
                                        src = '/images/menu/find.png'
                                        alt = 'find'
                                    />
                                </div>
                            </div>
                            <div className = {css.enumBrands}>
                                {brands.map(e =>
                                    <div className = {css.soloBrand} key = {e.name}>
                                        <input
                                               type = "checkbox"
                                               onChange = {handleBrands}
                                               id = {e.name}
                                               value = {e.name} />
                                        <span>
                                            {e.name}
                                        </span>
                                        <span>
                                            ({e.counter})
                                        </span>
                                    </div>
                                )}
                                <div
                                    onClick = {() => setShowAll(!showAll)}
                                    className = {
                                        showAll ?
                                            `${css.showAll}` :
                                            `${css.showAll} ${css.rotate}`
                                    }
                                >
                                    Показать все
                                </div>
                                <div className = {css.findBrand}>
                                    <button
                                        onClick={() => {
                                            setQuery(findBrand)
                                            setMinQuery(min)
                                            setMaxQuery(max)
                                        }}
                                        className = {css.show}>
                                        Показать
                                    </button>
                                    <button
                                        onClick = {removeRes}
                                        className = {css.remove}>
                                        <img
                                            src = "/images/catalog/remove.png"
                                            alt = "remove"
                                        />
                                    </button>
                                </div>
                                <div className = {css.sideBarFilters}>
                                    <span
                                        className = {
                                            categoriesFilter.indexOf('Уход за телом') !== -1 ?
                                                `${css.activeSpan}` :
                                                ''
                                        }
                                        onClick={() => filteredByCategory('Уход за телом')}
                                    >
                                        Уход за телом
                                    </span>
                                    <span
                                        className = {
                                            categoriesFilter.indexOf('Уход за руками') !== -1 ?
                                                `${css.activeSpan}` :
                                                ''
                                        }
                                        onClick={() => filteredByCategory('Уход за руками')}
                                    >
                                        Уход за руками
                                    </span>
                                </div>
                            </div>
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