import {filterByCategory} from '../utils';

const arr = ['Ariel', 'Bimax', 'Biomio']
const setFilters = jest.fn()

describe('filterByCategory', () => {

    test('Удаление категории, если она уже есть в массиве', () => {
        filterByCategory(arr, 'Bimax', setFilters)
        expect(setFilters).toHaveBeenCalledWith(['Ariel', 'Biomio'])
    })

    test('Добавление категории при её отсутствии в массиве', () => {
        filterByCategory(arr, 'Aos', setFilters)
        expect(setFilters).toHaveBeenCalledWith(['Ariel', 'Bimax', 'Biomio', 'Aos'])
    })
})