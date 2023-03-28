import React, {useEffect, useRef, useState} from 'react';
import css from './AdminProduct.module.scss';
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import ChangeProductInput from "../../../ui/ChangeProductInput/ChangeProductInput";

interface IAdminProduct {
    photo: string;
    id: number;
    brand: string;
    title: string;
    barcode: number;
    size: string;
    manufacturer: string;
    price: number;
}

const AdminProduct: React.FC<IAdminProduct> = ({
    photo,
    id,
    brand,
    title,
    barcode,
    size,
    manufacturer,
    price
}) => {

    const [open, setOpen] = useState(false)
    const {items} = useTypedSelector(state => state.catalog)
    const {removeFromCatalog, changeProduct} = useActions()

    const wrapperRef: any = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target))
                setOpen(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        };
    }, []);

    const getElement = (name: string) => {
        // @ts-ignore
        return document.getElementById(name).value
    }

    const saveChanges = () => {
        changeProduct({
            data: {
                id,
                title: getElement('titleInput'),
                photo: "/images/mock/biomio.png",
                sizeType: "вес",
                size: getElement("sizeInput"),
                barcode: +getElement("barcodeInput"),
                manufacturer: getElement("manufacturerInput"),
                brand: getElement("brandInput"),
                price: +getElement("priceInput"),
                categories: ["Уход за руками"],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada."
            },
            id
        })
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
                    <button onClick={() => setOpen(!open)}>
                        Редактировать
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
                    <div className = {css.options}>
                        <ChangeProductInput
                            id = "brandInput"
                            name = "Бренд"
                            field = {brand}
                            type = 'string'
                        />
                        <ChangeProductInput
                            id = "titleInput"
                            name = "Название"
                            field = {title}
                            type = 'string'
                        />
                        <ChangeProductInput
                            id = "barcodeInput"
                            name = "Штрих-код"
                            field = {barcode}
                            type = 'number'
                        />
                        <ChangeProductInput
                            id = "sizeInput"
                            name = "Размер"
                            field = {size}
                            type = 'string'
                        />
                        <ChangeProductInput
                            id = "manufacturerInput"
                            name = "Производитель"
                            field = {manufacturer}
                            type = 'string'
                        />
                        <ChangeProductInput
                            id = "priceInput"
                            name = "Цена"
                            field = {price}
                            type = 'number'
                        />
                        <button onClick={saveChanges}>Сохранить изменения</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default AdminProduct