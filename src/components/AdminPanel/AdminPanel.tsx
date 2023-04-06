import React, {useState} from 'react';
import css from './AdminPanel.module.scss';
import AdminProduct from './AdminProduct/AdminProduct';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import {CATALOG} from "../../constants";
import EditProduct from "../../ui/EditProduct/EditProduct";
import BackArrow from "../../ui/BackArrow/BackArrow";

const AdminPanel: React.FC = () => {

    const {items} = useTypedSelector(state => state.catalog)
    const [toggle, setToggle] = useState<boolean>(false)

    return(
        <div className={css.container}>
            <div className = {css.content}>
                <Breadcrumbs
                    links={[
                        {
                            title: 'Каталог',
                            link: CATALOG
                        },
                        {
                            title: 'Управление каталогом'
                        }
                    ]}
                />
                <BackArrow />
                <h2>
                    Управление каталогом
                </h2>
                <div className = {css.addProduct}>
                    <button
                        className = {toggle ? `${css.close}` : ''}
                        onClick = {() =>  setToggle(!toggle)}>
                        {toggle ?  'Отмена' : 'Добавить новый товар'}
                    </button>
                </div>
                {toggle ?
                    <div className = {css.newProduct}>
                        <EditProduct
                            usage = {0}
                        />
                    </div>
                    :
                    <div>
                        <h3>
                            Текущие товары:
                        </h3>
                        {items.map(e =>
                            <AdminProduct
                                key = {e.id}
                                photo = {e.photo}
                                id = {e.id}
                                brand = {e.brand}
                                title = {e.title}
                                barcode = {e.barcode}
                                size = {e.size}
                                manufacturer = {e.manufacturer}
                                price = {e.price}
                                description = {e.description}
                                sizeType = {e.sizeType}
                                categories = {e.categories}
                            />
                        )}
                        {!items.length &&
                            <h2>
                                Перейдите на страницу Каталог!
                            </h2>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default AdminPanel