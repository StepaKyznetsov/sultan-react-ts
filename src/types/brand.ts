export interface Brand {
    name: string;
    counter: number;
}

export interface BrandState {
    brands: Brand[]
}

export enum BrandActionTypes {
    SET_CURRENT_BRANDS = 'SET_CURRENT_BRANDS',
    RESET_BRANDS = 'RESET_BRANDS'
}


interface SetCurrentBrands {
    type: BrandActionTypes.SET_CURRENT_BRANDS;
    payload: Brand[];
}

export type BrandAction = 
    SetCurrentBrands
