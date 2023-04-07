import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ProductAbout from '../ui/ProductAbout/ProductAbout';

describe('ProductAbout', () => {

    const mockStore = configureMockStore()

    const store = mockStore({
        catalog: {
            items: [{
                id: 4,
                title: "Порошок стиральный Автомат 100 пятен COMPACT",
                photo: "/images/mock/bimax.png",
                sizeType: "вес",
                size: "1500 г",
                barcode: 4604049097552,
                manufacturer: "Нэфис",
                brand: "Bimax",
                price: 52,
                categories: ["Уход за телом"], 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }]
        },
        basket: {
            order: {}
        }
    })
    
    it('Рендер с верными пропсами', () => {
        render(
            <Provider store = {store}>
                <ProductAbout
                    brand = "Bimax"
                    title = "Порошок стиральный Автомат 100 пятен COMPACT"
                    sizeType = "вес"
                    size = "1500 г"
                    price = {52}
                    barcode = {4604049097552}
                />
            </Provider>
        )
        expect(screen.getByTestId('product-page')).toBeInTheDocument()
        expect(screen.getByTestId('product-title')).toHaveTextContent('Порошок стиральный Автомат 100 пятен COMPACT')
        expect(screen.getByTestId('product-size')).toHaveTextContent('1500 г')
        expect(screen.getByTestId('product-price')).toHaveTextContent('52 ₸')
    })
})