import React from 'react';
import css from './AdminPanel.module.scss';
import AdminProduct from './AdminProduct/AdminProduct';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import {CATALOG} from "../../constants/constants";

const AdminPanel: React.FC = () => {

    const {items} = useTypedSelector(state => state.catalog)

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
                <h2>
                    Управление каталогом
                </h2>
                <div className = {css.addProduct}>
                    <div>
                        Добавить новый товар
                    </div>
                </div>
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
                    />
                )}
            </div>

        </div>
    )
}

export default AdminPanel