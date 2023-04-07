import {render, fireEvent, screen} from '@testing-library/react';
import Counter from '../ui/Counter/Counter';

describe('Counter', () => {

    const mockIncrement = jest.fn()
    const mockDecrement = jest.fn()

    beforeEach(() => {
        mockIncrement.mockClear()
        mockDecrement.mockClear()
    })

    it('Корректный рендер компонента Счётчик', () => {
        render(
            <Counter 
                marginRight = {0}
                styles = "test"
                increment = {mockIncrement}
                decrement = {mockDecrement}
                count = {0}
            />
        )

        expect(screen.getByText('-')).toBeInTheDocument()
        expect(screen.getByText('+')).toBeInTheDocument()
        expect(screen.getByDisplayValue('0')).toBeInTheDocument()
    })

    it('Вызов инкремента, когда кнопка "+" нажата', () => {
        render(
            <Counter 
                marginRight = {0}
                styles = "test"
                increment = {mockIncrement}
                decrement = {mockDecrement}
                count = {0}
            />
        )

        fireEvent.click(screen.getByText('+'))

        expect(mockIncrement).toHaveBeenCalled()
    })

    it('Вызов декремента, когда кнопка "-" нажата', () => {

        render(
            <Counter 
                marginRight = {0}
                styles = "test"
                increment = {mockIncrement}
                decrement = {mockDecrement}
                count = {0}
            />
        )

        fireEvent.click(screen.getByText('-'))

        expect(mockDecrement).toHaveBeenCalled()
    })
})