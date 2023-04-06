import {render, screen} from '@testing-library/react';
import Header from '../components/Header/Header';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as router from 'react-router';


const mobileWidth = 768

function resizeToMobileDevice() {
    (window as any).innerWidth = mobileWidth;
    (window as any).dispatchEvent(new Event('resize'));
}

describe('Header component', () => {

    const mockStore = configureMockStore()
    const navigate = jest.fn()

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

    const store = mockStore({
        basket: {
            order: [],
            error: null
        }
    })

    test('Отображается корректная контактная информация', () => {

        render(
            <Provider store = {store}>
                <Header />
            </Provider>
        )

        const addressElement = screen.getByText(/г. Кокчетав, ул. Ж. Ташенова 129Б/i)
        const emailElement = screen.getByText(/opt.sultan@mail.ru/i)
        const phoneElement = screen.getByText(/\+7 \(777\) 490-00-91/i)

        expect(addressElement).toBeInTheDocument()
        expect(emailElement).toBeInTheDocument()
        expect(phoneElement).toBeInTheDocument()
    })

    test('Отображается навигационная панель', () => {
        
        render(
            <Provider store = {store}>
                <Header />
            </Provider>
        )

        const linkElements = screen.getAllByRole('link')

        expect(linkElements.length).toBeGreaterThan(0)
    })

    test('Отображается кнопка Прайс-лист', () => {
        
        render(
            <Provider store = {store}>
                <Header />
            </Provider>
        )

        const priceBtnElement = screen.getByRole('button', { name: /прайс-лист/i })

        expect(priceBtnElement).toBeInTheDocument()
    })
    
    test('Проверка на изменение хедера для мобильных устройств', () => {
        
        render(
            <Provider store = {store}>
                <Header />
            </Provider>
        )
        
        resizeToMobileDevice()

        const mobileView = screen.getByTestId('mobile')

        expect(mobileView).toHaveStyle('display: block')
    })
})