export const choosePage = (
    newPage: number,
    setCatalogPage: any,
    currentPage?: number,
    countProducts?: any[],
    limit?: number,
): void => {
    if (!countProducts || !limit) {
        setCatalogPage(newPage) 
        return
    }
    if (newPage === currentPage || newPage > Math.ceil((countProducts.length / limit))) return
    setCatalogPage(newPage)
}