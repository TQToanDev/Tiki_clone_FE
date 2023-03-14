import axiosCline from '../config/axiosClient';

class CartService {
    static getAll = (userID) => axiosCline.post('/cart/', { userID: userID });
    static create = (userID) => axiosCline.post('/cart/createCart', { userID: userID });
    static createCartItem = (userID, productID) =>
        axiosCline.post('/cart/addCartItem', { userID: userID, productID: productID });
    static subCartItem = (userID, productID, event) =>
        axiosCline.post('/cart/addCartItem', { userID: userID, productID: productID, subEvent: event });
    static deleteCartItem = (cartItemID) => axiosCline.post('/cart/deleteCartItem', { cartItemID: cartItemID });
}

export default CartService;
