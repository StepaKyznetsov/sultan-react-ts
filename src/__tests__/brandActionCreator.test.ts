import {setCurrentBrands} from './../store/action-creators/brand';
import {BrandActionTypes} from '../types/brand';

describe('setCurrentBrands', () => {
    
    it('Диспатч SET_CURRENT_BRANDS с верным стейтом Brand на выходе', () => {

        const mockDispatch = jest.fn()

        const mockArr = [
            {
                id: 3,
                title: "Автомат Гель СМС жидкое в растворимых капсулах",
                photo: "/images/mock/ariel.png",
                sizeType: "вес",
                size: "15X28.8 г",
                barcode: 4604049097551,
                manufacturer: "Нэфис",
                brand: "Ariel",
                price: 49,
                categories: ["Уход за телом"], 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
        ]
        const mockBrands = [
            { 
                name: 'Ariel', 
                counter: 1 
            },
            {
                name: 'Bimax',
                counter: 2
            }
        ]

        const expectedAction = {
            type: BrandActionTypes.SET_CURRENT_BRANDS,
            payload: [
                { 
                    name: 'Ariel', 
                    counter: 1 
                }
            ]
        }

        setCurrentBrands(mockArr, mockBrands)(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })
})