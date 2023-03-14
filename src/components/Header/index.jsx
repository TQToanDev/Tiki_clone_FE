import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import ProductService from '../../service/ProductService';
function Header() {
    const { cartList } = useContext(AppContext);
    const { setSearchList } = useContext(AppContext);
    const searchTerm = useRef('');
    function uppercase(str) {
        const array1 = str.split(' ');
        const newarray1 = [];

        for (var x = 0; x < array1.length; x++) {
            newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
        }
        return newarray1.join(' ');
    }
    const search = async () => {
        const data = await ProductService.search(uppercase(searchTerm.current.value), 'rate');
        setSearchList(data);
    };

    return (
        <div className="h-[80px] w-full flex justify-center border-b border-b-gray-400 bg-blue-500">
            <div className="flex justify-between w-[1240px] h-full items-center">
                <div className="w-[60px] cursor-pointer">
                    <NavLink to={'/'}>
                        <img
                            src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                            alt=""
                        />
                    </NavLink>
                </div>
                <form action="#" className="flex w-[550px] h-[45px]">
                    <input
                        ref={searchTerm}
                        type="text"
                        className="w-[90%] rounded-tl rounded-bl pl-3 text-xl outline-none"
                    />
                    <NavLink to={'/search'}>
                        <button className="bg-blue-700 w-full h-full rounded-tr rounded-br px-3" onClick={search}>
                            Search
                        </button>
                    </NavLink>
                </form>
                <div className="w-[200px] h-10 flex justify-between items-center ">
                    <div className="w-[90%] h-full flex items-center relative cursor-pointer">
                        <FontAwesomeIcon icon={faUser} color={'white'} size={'xl'} />
                        <span className="ml-3 text-white peer">Quoc Toan</span>
                        <ul className="absolute top-[80%] hidden hover:block peer-hover:block py-1 left-[-20%] bg-white text-center text-sm w-[200px]">
                            <li className="py-1 ">Đăng Nhập</li>
                            <li className="py-1 ">Đăng Xuất</li>
                        </ul>
                    </div>
                    <div className="relative flex items-center h-full cursor-pointer">
                        <NavLink to={'/cart'}>
                            <span className="absolute font-semibold right-[-20%] top-[-10%] text-sm w-5 text-center  rounded-full bg-yellow-300">
                                {cartList.length}
                            </span>
                            <FontAwesomeIcon icon={faCartShopping} color={'white'} size={'xl'} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
