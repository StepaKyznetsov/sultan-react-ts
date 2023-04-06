export const MAIN: string = '/';
export const CATALOG: string = '/catalog';
export const BASKET: string = '/basket';
export const ADMIN: string = '/admin';
export const PAGES: number[] = [1, 2, 3, 4, 5]
export const LINKS: string[][] = [
    [
        'О компании',
        'Доставка и оплата',
        'Возврат',
        'Контакты'
    ],
    [
        'Бытовая химия',
        'Косметика и гигиена',
        'Товары для дома',
        'Товары для детей и мам',
        'Посуда'
    ]
]

interface Dropdown {
    value: string; 
    name: string; 
}

export const DROPDOWN_OPTIONS: Dropdown[] = [
    {
        value: 'name',
        name: 'Название'
    },
    {
        value: 'nameReverse',
        name: 'Название(обратный порядок)'
    },
    {
        value: 'price',
        name: 'Цена(убывание)'
    },
    {
        value: 'priceReverse',
        name: 'Цена(возрастание)'
    }
]