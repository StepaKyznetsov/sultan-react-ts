import React, {useEffect, useState} from 'react';
import css from "./EditProduct.module.scss";
import ChangeProductInput from "../ChangeProductInput/ChangeProductInput";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const enum enumUse {
    create,
    edit
}

interface IEditProduct {
    usage: enumUse;
}

const EditProduct: React.FC<IEditProduct> = ({usage}) => {

    const {items} = useTypedSelector(state => state.catalog)
    const {current} = useTypedSelector(state => state.product)
    const {addProduct, changeProduct} = useActions()
    const [currentDescription, setCurrentDescription] = useState<string>('')
    const [currentType, setCurrentType] = useState<string>('вес')
    const [currentCategories, setCurrentCategories] = useState<string[]>([])
    const notifyValidation = () => toast.warn("Не все поля заполнены!");
    const notifyNewProduct = () => toast("Новый товар создан!");
    const notifyEditSuccess = () => toast("Данные товара изменены!");

    useEffect(() => {
        if (usage === 1) {
            setCurrentDescription(currentProduct.description)
            setCurrentType(currentProduct.sizeType)
            setCurrentCategories([...currentProduct.categories])
        }
    }, [])

    const getElement = (name: string) => {
        // @ts-ignore
        return !document.getElementById(name) ? null : document.getElementById(name).value
    }

    const editDescription = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const value = e.target.value
        setCurrentDescription(value)
    }

    const setType = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const value = e.target.value
        setCurrentType(value)
    }

    const setCategories = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value
        currentCategories.indexOf(value) !== -1 ?
            setCurrentCategories(currentCategories.filter(e => e !== value)) :
            setCurrentCategories([...currentCategories, value])
    }

    let currentProduct = JSON.parse(JSON.stringify(current))[0]

    let brand = usage === 0 ? getElement('brandInput') : currentProduct.brand
    let title = usage === 0 ? getElement('titleInput') : currentProduct.title
    let barcode = usage === 0 ? getElement('barcodeInput') : currentProduct.barcode
    let size = usage === 0 ? getElement('sizeInput') : currentProduct.size
    let manufacturer = usage === 0 ? getElement('manufacturerInput') : currentProduct.manufacturer
    let price = usage === 0 ? getElement('priceInput') : currentProduct.price
    let photo = usage === 0 ? getElement('photoInput') : currentProduct.photo

    const isEmptyInputs = () => {
        return !brand ||
            !title ||
            !barcode ||
            !size ||
            !manufacturer ||
            !price ||
            !photo ||
            !currentDescription ||
            !currentCategories.length
    }

    const inputData = [
        {
            id: "brandInput",
            name: "Бренд",
            field: brand,
            type: "string",
        },
        {
            id: "titleInput",
            name: "Название",
            field: title,
            type: "string",
        },
        {
            id: "barcodeInput",
            name: "Штрих-код",
            field: barcode,
            type: "number",
        },
        {
            id: "sizeInput",
            name: "Размер",
            field: size,
            type: "string",
        },
        {
            id: "manufacturerInput",
            name: "Производитель",
            field: manufacturer,
            type: "string",
        },
        {
            id: "priceInput",
            name: "Цена",
            field: price,
            type: "number",
        },
        {
            id: "photoInput",
            name: "Фото",
            field: photo,
            type: "string",
        },
    ]

    const confirm = () => {
        if (isEmptyInputs()) return notifyValidation()

        let result = {
            title: getElement('titleInput'),
            photo: getElement('photoInput'),
            sizeType: currentType,
            size: getElement('sizeInput'),
            barcode: +getElement('barcodeInput'),
            manufacturer: getElement('manufacturerInput'),
            brand: getElement('brandInput'),
            price: +getElement('priceInput'),
            categories: currentCategories,
            description: currentDescription
        }

        if (usage === 0) {
            addProduct(items, {
                ...result
            })
            notifyNewProduct()
        }
        else {
            changeProduct({
                data: {
                    id: currentProduct.id,
                    ...result
                },
                id: currentProduct.id
            })
            notifyEditSuccess()
        }
    }

    return(
        <div className = {css.options}>
            {inputData.map(e =>
                <ChangeProductInput
                    key = {e.id}
                    name = {e.name}
                    field = {e.field}
                    type = {e.type}
                    id = {e.id}
                />
            )}
            <div>
                <span>
                    Описание:
                </span>
                <textarea
                    value = {currentDescription}
                    onChange = {editDescription}
                />
            </div>
            <div>
                Тип размера:
                <select
                    onChange = {setType}
                    value = {currentType}
                >
                    <option value = "вес">
                        Вес
                    </option>
                    <option value = "объём">
                        Объём
                    </option>
                </select>
            </div>
            <div className = {css.dropdownCheckbox}>
                <label className = {css.labelTitle}>
                    Тип ухода
                </label>
                <ul>
                    <li>
                        <label>
                            <input
                                name = "categories"
                                checked = {currentCategories.indexOf('Уход за руками') !== -1}
                                type = "checkbox"
                                onChange = {setCategories}
                                value = "Уход за руками"
                            />
                            Уход за руками
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                name = "categories"
                                checked = {currentCategories.indexOf('Уход за телом') !== -1}
                                type = "checkbox"
                                onChange = {setCategories}
                                value = "Уход за телом"
                            />
                            Уход за телом
                        </label>
                    </li>
                </ul>
            </div>
            <button
                className = {css.confirm}
                onClick = {confirm}>
                Сохранить изменения
            </button>
            <ToastContainer
                position="bottom-center"
                theme="dark"
                closeOnClick
            />
        </div>
    )
}

export default EditProduct