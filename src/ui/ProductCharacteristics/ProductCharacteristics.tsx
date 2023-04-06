import React, {useState} from 'react';
import css from './ProductCharacteristics.module.scss';

interface IProductCharacteristics {
    brand: string;
    barcode: number;
    manufacturer: string;
    sizeType: string;
    size: string;
    description: string;
}

const ProductCharacteristics: React.FC<IProductCharacteristics> = ({
    brand,
    barcode,
    manufacturer,
    sizeType,
    size,
    description
}) => {

    const [showDescription, setShowDescription] = useState<boolean>(false)
    const [showCharacteristics, setShowCharacteristics] = useState<boolean>(false)

    const characteristics = [
        [
            {name: 'Производитель:', value: brand},
            {name: 'Бренд:', value: brand},
            {name: 'Артикул:', value: 460404},
            {name: 'Штрихкод:', value: barcode}
        ],
        [
            {name: 'Назначение:', value: brand},
            {name: 'Тип:', value: brand},
            {name: 'Производитель:', value: manufacturer},
            {name: 'Бренд:', value: brand},
            {name: 'Артикул:', value: barcode},
            {name: 'Штрихкод:', value: barcode},
            {name: sizeType === 'вес' ? 'Вес:' : 'Объём', value: size},
        ]
    ]

    return(
        <div className = {css.characteristics}>
            {characteristics[0].map(e => 
                <div key = {e.name}>
                    <span>{e.name} </span>
                    <span className = {css.value}>
                        {e.value}
                    </span>
                </div>
            )}
            <span
                onClick = {() => setShowDescription(!showDescription)}
                className = {
                    showDescription ?
                    `${css.subtitle}` : 
                    `${css.subtitle} ${css.rotate}`
                }
            >
                Описание
            </span>
            {showDescription &&
                <p>
                    {description}
                </p>
            }
            <span
                onClick = {() => setShowCharacteristics(!showCharacteristics)}
                className = {showCharacteristics ?
                    `${css.subtitle} ${css.ch}` : `${css.subtitle} ${css.ch} ${css.rotate}`
                }
            >
                Характеристики
            </span>
            {showCharacteristics &&
                <div>
                    {characteristics[1].map(e =>
                        <div key = {e.name}>
                            <span>{e.name} </span>
                            <span className = {css.value}>
                                {e.value}
                            </span>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default ProductCharacteristics