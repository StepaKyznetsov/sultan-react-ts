import React, {useEffect, useState} from 'react';
import css from "./EditProduct.module.scss";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DropdownCheckbox from './DropdownCheckbox/DropdownCheckbox';
import InputData from './InputData/InputData';

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
    const notifyValidation = () => toast.warn("Не все поля заполнены!")
    const notifyExistBarcode = () => toast.warn("Такой штрих-код уже используется!")
    const notifyNewProduct = () => toast("Новый товар создан!")
    const notifyEditSuccess = () => toast("Данные товара изменены!")

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

    let brand = usage === 0 ? '' : currentProduct.brand
    let title = usage === 0 ? '' : currentProduct.title
    let barcode = usage === 0 ? '' : currentProduct.barcode
    let size = usage === 0 ? '' : currentProduct.size
    let manufacturer = usage === 0 ? '' : currentProduct.manufacturer
    let price = usage === 0 ? '' : currentProduct.price
    let photo = usage === 0 ? '' : currentProduct.photo

    const isEmptyInputs = () => {
        return !currentDescription ||
            !currentCategories.length ||
            !getElement('titleInput') ||
            !getElement('photoInput') ||
            !getElement('sizeInput') ||
            !getElement('barcodeInput') ||
            !getElement('manufacturerInput') ||
            !getElement('brandInput') ||
            !getElement('priceInput')
    }

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
            if (items.find(e => e.barcode === +getElement('barcodeInput'))) return notifyExistBarcode()
            addProduct(items, {
                ...result
            })
            notifyNewProduct()
        }
        else {
            if (currentProduct.barcode !== +getElement('barcodeInput') && 
                items.filter(e => e.barcode === +getElement('barcodeInput')).length === 1
                ) 
                return notifyExistBarcode()
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

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') confirm()
    }

    return(
        <div className = {css.options}>
            <InputData 
                brand = {brand}
                title = {title}
                barcode = {barcode}
                size = {size}
                manufacturer = {manufacturer}
                price = {price}
                photo = {photo}
                handleKeyPress = {handleKeyPress}
            />
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
            <DropdownCheckbox 
                setCategories = {setCategories}
                currentCategories = {currentCategories}
            />
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