import React, {useRef, useState} from 'react';
import css from './AdminProduct.module.scss';
import EditProduct from '../../../ui/EditProduct/EditProduct';
import {
    useActions, 
    useTypedSelector, 
    useClickOutside} 
from '../../../hooks';

interface IAdminProduct {
    photo: string;
    id: number;
    brand: string;
    title: string;
    barcode: number;
    size: string;
    manufacturer: string;
    price: number;
    description: string;
    sizeType: string;
    categories: string[];
}

const AdminProduct: React.FC<IAdminProduct> = ({
    photo,
    id,
    brand,
    title,
    barcode,
    size,
    manufacturer,
    price,
    description,
    sizeType,
    categories
}) => {

    const [open, setOpen] = useState<boolean>(false)
    const {items} = useTypedSelector(state => state.catalog)
    const {removeFromCatalog, getProductById} = useActions()

    const wrapperRef: any = useRef(null)
    
    useClickOutside(wrapperRef, setOpen)
    
    const startEdit = (id: number): void => {
        getProductById(id, items)
        setOpen(!open)
    }

    return(
        <div className = {css.container} ref={wrapperRef}>
            <div className = {css.content}>
                <div className = {css.info}>
                    <div className = {css.image}>
                        <img
                            src ={photo}
                            alt = 'product'
                        />
                    </div>
                    <div className = {css.text}>
                        <div className = {css.id}>
                            id: {id}
                        </div>
                        <div className={css.brand}>
                            {brand}
                        </div>
                        <div className = {css.title}>
                            {title}
                        </div>
                    </div>
                </div>
                <div className = {css.btns}>
                    <button onClick={() => startEdit(barcode)}>
                        {open ? 'Отмена' : 'Редактировать'}
                    </button>
                    <button onClick={() => removeFromCatalog(id, items)}>
                        Удалить
                    </button>
                </div>
            </div>
            {open &&
                <div className = {css.changeProduct}>
                    <h3>
                       Редактировать товар
                    </h3>
                    <EditProduct
                        usage={1}
                    />
                </div>
            }
        </div>
    )
}

export default AdminProduct