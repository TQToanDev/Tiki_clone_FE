import { createContext } from 'react';
import { useEffect, useState } from 'react';
import ProductService from '../service/ProductService';
import CartService from '../service/CartService';

export const AppContext = createContext([]);

const userID = '63b94e0acad25be9217ce66e';

export const AppProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [cost, setCost] = useState(0);
    const [searchList, setSearchList] = useState([]);
    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const product = await ProductService.getAll();
                const cart = await CartService.getAll(userID);
                setProductList(product);
                setCartList(cart);
            } catch (error) {
                console.log('Failed to fetch product list', error);
            }
        };

        fetchProductList();
    }, []);

    return (
        <AppContext.Provider
            value={{
                productList,
                cartList,
                setCartList,
                orderList,
                setOrderList,
                cost,
                setCost,
                userID,
                searchList,
                setSearchList,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
