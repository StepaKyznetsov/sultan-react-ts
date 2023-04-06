import * as CatalogActionCreators from './catalog';
import * as ProductActionCreators from './product';
import * as BasketActionCreators from './basket';
import * as BrandActionCreators from './brand';

export default {
    ...BasketActionCreators,
    ...ProductActionCreators,
    ...CatalogActionCreators,
    ...BrandActionCreators
}