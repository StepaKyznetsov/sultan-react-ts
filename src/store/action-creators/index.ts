import * as CatalogActionCreators from './catalog';
import * as ProductActionCreators from './product';
import * as BasketActionCreators from './basket';

export default {
    ...BasketActionCreators,
    ...ProductActionCreators,
    ...CatalogActionCreators
}