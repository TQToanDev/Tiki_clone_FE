import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CartService from '../../service/CartService';

function ProductItem(prop) {
    const cart = prop.data;
    const { orderList, setOrderList, setCost, cartList, setCartList, userID } = useContext(AppContext);
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const checked = (cart) => {
        const value = orderList.findIndex((order) => {
            return order._id === cart._id;
        });

        if (value === -1) {
            orderList.push(cart);
            setOrderList([...orderList]);
        }
        if (value !== -1) {
            orderList.splice(value, 1);
            if (orderList.length === 0) {
                setCost(0);
            }
            setOrderList([...orderList]);
        }
        const priceList = orderList.map((order) => {
            return order.quality * parseInt(order.productID.price);
        });

        setCost(
            priceList.reduce((total, price) => {
                return total + price;
            }),
        );
    };

    const binCart = async () => {
        await CartService.deleteCartItem(cart._id);
    };
    const price = parseInt(cart.productID.price);
    return (
        <div className="w-full grid grid-cols-12 gap py-3 px-5" key={cart._id}>
            <div className="flex items-start col-span-5 ">
                <input
                    type="checkbox"
                    onClick={() => {
                        checked(cart);
                    }}
                    className="mr-3"
                />

                <img src={cart.productID.img} alt="" className="w-[100px] h-[100px]" />
                <span className="ml-3 hover:text-cyan-500 cursor-pointer overflow-hidden h-[50px]">
                    {cart.productID.name}
                </span>
            </div>
            <div className="flex justify-end items-center col-span-2">
                <span>{VND.format(cart.productID.price)}</span>
            </div>
            <div className="flex items-center justify-center text-center col-span-2">
                <div className="flex border border-black rounded-sm">
                    <span
                        className="cursor-pointer border-r border-black"
                        onClick={async () => {
                            await CartService.createCartItem(userID, cart.productID._id);
                            cart.quality++;
                            setCartList([...cartList]);
                        }}
                    >
                        <img
                            className="w-[24px] h-[24px]"
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                            alt=""
                        />
                    </span>
                    <input type="text" value={cart.quality} className="outline-none w-[32px] text-center" />
                    <span
                        className="cursor-pointer border-l border-black"
                        onClick={async () => {
                            if (cart.quality <= 0) return;
                            await CartService.subCartItem(userID, cart.productID._id, 'sub');
                            cart.quality--;
                            setCartList([...cartList]);
                        }}
                    >
                        <img
                            className=" w-[24px] h-[24px] "
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                            alt=""
                        />
                    </span>
                </div>
            </div>
            <div className="flex justify-end  items-center col-span-2">
                <span className="text-red-500 font-semibold mr-5">{VND.format(price * cart.quality)}</span>
            </div>
            <div className="flex justify-end items-center col-span-1 cursor-pointer" onClick={binCart}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    );
}

export default ProductItem;
