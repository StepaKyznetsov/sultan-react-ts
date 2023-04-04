import React, {useState} from 'react';
import css from './Filters.module.scss';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

interface Brand {
    name: string;
    counter: number;
}

const Filters: React.FC = () => {

    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(10000)
    const [minQuery, setMinQuery] = useState<number>(0)
    const [maxQuery, setMaxQuery] = useState<number>(10000)
    const {items, page, limit} = useTypedSelector(state => state.catalog)
    const [categoriesFilter, setCategoriesFilter] = useState<string[]>([])
    const [currentSort, setCurrentSort] = useState<string>('name')
    const [showAll, setShowAll] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [changeBrands, setChangeBrands] = useState<boolean>(false)
    const [brandsDefault, setBrandsDefault] = useState<string[]>([])
    const [findBrand, setFindBrand] = useState<string>('')
    const [query, setQuery] = useState<string>('')
    const {fetchCatalog, setCatalogPage} = useActions()
    
    let brands: Brand[] = []
    let filteredItems = [...items]

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

    const choosePage = (p: number): void => {
        if (p === page || p > Math.ceil((countProducts.length / limit))) return
        setCatalogPage(p)
    }

    const handleKeyPress = (e: any) => {
        if(e.key === 'Enter') setRequestData()
    }

    const setRequestData = () => {
        choosePage(1)
        setQuery(findBrand)
        setMinQuery(min)
        setMaxQuery(max)
        setOpen(false)
        setChangeBrands(true)
    }

    const removeRequestData = () => {
        setQuery('')
        setFindBrand('')
        setMinQuery(0)
        setMaxQuery(10000)
        setMin(0)
        setMax(10000)
        setChangeBrands(false)
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

    const countProducts = filteredItems
        .filter(e => e.brand.toLowerCase().includes(query.toLowerCase()))
        .filter(e => e.price >= minQuery && e.price <= maxQuery)
        .filter(e => brandsDefault.indexOf(e.brand) !== -1 || !brandsDefault.length)
        .filter(e => categoriesFilter.indexOf(e) === -1)

    let res = countProducts.slice((page - 1) * limit, limit * page)

    return (
        <div>

        </div>  
    )
    
}

export default Filters