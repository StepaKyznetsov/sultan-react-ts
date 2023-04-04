interface IBrand {
    name: string;
    counter: number;
}

export const getBrands = (
    arr: any[], 
    brands: IBrand[], 
) => {
    arr.map(item => {
        if (!brands.filter(e => e.name === item.brand).length)
            brands.push({
                name: item.brand,
                counter: 1
            })
        else {
            let obj: IBrand | undefined = brands.find(e => e.name === item.brand)
            if (!obj) return
            obj.counter += 1
        }
    })
    return brands
}