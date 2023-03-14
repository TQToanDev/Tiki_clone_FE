import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { NavLink } from 'react-router-dom';
import CartService from '../../../service/CartService';

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

function Product(prop) {
    const { userID } = useContext(AppContext);
    const { name, img, rate, price, sold, _id } = prop.data;
    const addCart = async () => {
        try {
            await CartService.createCartItem(userID, _id);
        } catch (error) {
            console.log('err in addCartItem', error);
        }
    };
    return (
        <div className="flex relative w-[200px] flex-col bg-white">
            <div className="flex flex-col h-[200px] peer">
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col justify-between text-sm ml-2">
                <NavLink to={'/productInfo'}>
                    <div className="flex h-11 mb-1 overflow-hidden cursor-pointer">
                        <h3>{name}</h3>
                    </div>
                </NavLink>
                <div className="flex items-center mb-1 text-gray-500 text-xs">
                    <div className="flex items-center">
                        <span className="mr-1">{rate}</span>
                        <FontAwesomeIcon icon={faStar} color={'yellow'} />
                    </div>
                    <div className="mx-[6px] mt-[2px] h-[12px] border-l border-black"></div>
                    <div className="flex ">
                        <span>Đã bán </span>
                        <span className="ml-1">{sold}</span>
                    </div>
                </div>
                <div className="text-red-500 mb-1 text-lg font-semibold">
                    <span>{VND.format(price)}</span>
                </div>
            </div>

            <span
                onClick={addCart}
                className="w-[80%] hover:block hidden peer-hover:block cursor-pointer absolute bg-white left-[10%] top-[30%] text-center border border-black"
            >
                Thêm vào giỏ hàng
            </span>
        </div>
    );
}

export default Product;
