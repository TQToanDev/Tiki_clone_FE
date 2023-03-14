import axiosCline from '../config/axiosClient';

class ProductService {
    static getAll = () => axiosCline.get(`/product/`);
    static get = (productId) => axiosCline.post('/product/', { productID: productId });
    static search = (searchTerm, filter) =>
        axiosCline.post('/product/search', { searchString: searchTerm, filter: filter });
}

export default ProductService;
