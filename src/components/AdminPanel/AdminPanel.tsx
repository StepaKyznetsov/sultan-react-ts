import React, {useState} from 'react';
import css from './AdminPanel.module.scss';
import AdminProduct from './AdminProduct/AdminProduct';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import {CATALOG} from "../../constants/constants";
import EditProduct from "../../ui/EditProduct/EditProduct";
import BackArrow from "../../ui/BackArrow/BackArrow";

const AdminPanel: React.FC = () => {

    const {items} = useTypedSelector(state => state.catalog)
    const [toggle, setToggle] = useState(false)

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
                    <div onClick = {() => setToggle(!toggle)}>
                        Добавить новый товар
                    </div>
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
                    </div>
                }
            </div>
        </div>
    )
}

export default AdminPanel