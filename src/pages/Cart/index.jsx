import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
import ProductItem from './productItem';

function Cart() {
    const { cartList, setCartList, orderList, setCost, cost } = useContext(AppContext);

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const buy = () => {
        setCartList(
            cartList.reduce((total, current) => {
                if (!orderList.includes(current)) total.push(current);
                return total;
            }, []),
        );
        setCost(0);
    };

    return (
        <div className=" min-h-screen flex flex-col ">
            <div className="my-3 text-2xl font-semibold">
                <h1>Giỏ Hàng</h1>
            </div>
            <div className="flex justify-between">
                <div className="w-[70%] bg-white py-3 flex flex-col h-fit justify-around items-center">
                    {cartList &&
                        cartList.map((cart) => {
                            return <ProductItem data={cart} key={cart._id} />;
                        })}
                </div>
                <div className="w-[28%] h-fit ">
                    <div className="bg-white flex flex-col px-3 pb-3">
                        <div className="flex justify-between my-2">
                            <h3 className="text-lg font-semibold text-gray-500">Giao tới</h3>
                            <a href="#" className="text-blue-500">
                                Thay đổi
                            </a>
                        </div>
                        <div className="flex font-semibold mb-1">
                            <span>Trần Quốc Toàn</span>
                            <i className="mx-2 border-r-2 border-gray-400a"></i>
                            <span>0926434008</span>
                        </div>
                        <div className="text-sm text-gray-400">
                            <p>
                                Hẻm trọ sinh viên 55 kế cơm gà Lê Trang gần Di Động Thông Minh, Phường Xuân Khánh, Quận
                                Ninh Kiều, Cần Thơ
                            </p>
                        </div>
                    </div>
                    <div className="bg-white mt-3 flex flex-col px-3 pb-3">
                        <div className="flex justify-between mt-1">
                            <span>Tam tinh</span>
                            <span>{VND.format(cost)}</span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span>Giam gia</span>
                            <span>0</span>
                        </div>
                        <div className="flex justify-between mt-1 pt-1 border-t border-gray-400">
                            <span>Tong tien</span>
                            <span>{VND.format(cost)}</span>
                        </div>
                    </div>
                    <div className="mt-2 h-10 bg-red-600 text-white text-center py-2 rounded-lg" onClick={buy}>
                        Mua hàng
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
