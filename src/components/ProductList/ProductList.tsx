import React, {useEffect} from 'react';
import css from './ProductList.module.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchCatalog} from "../../store/action-creators/catalog";
import {useActions} from "../../hooks/useActions";
import ProductCard from '../ProductCard/ProductCard';

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

    const choosePage = (page: number): void => {
        if (page > Math.ceil(items.length / limit)) return
        setCatalogPage(page)
    }

    let res = items.slice((page - 1) * limit, limit * page)

    return(
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
            <div className = {css.pagination}>
                {pages.map(e =>
                    <div key = {e}
                        onClick={() => choosePage(e)}
                        style={e === page ? styles.active : styles.none}>
                        {e}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductList;