import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Product from './product';

function Search() {
    const { searchList } = useContext(AppContext);

    return (
        <div className="flex flex-col justify-center my-5">
            <div className="mb-5">
                <select name="" id="">
                    <option value="">Đánh giá tốt nhất</option>
                    <option value="">Giá tốt nhất</option>
                </select>
            </div>
            <div className="h-fit flex flex-wrap gap-2 ">
                {searchList &&
                    searchList.map((product) => {
                        return <Product value={product} key={product._id} />;
                    })}
            </div>
            <div className="flex justify-center mt-5">
                <ul className="flex w-[40%] justify-between">
                    <li className="bg-blue-500 rounded-lg px-4 py-2 cursor-pointer">1</li>
                    <li className="hover:bg-blue-300 rounded-lg px-4 py-2 cursor-pointer">2</li>
                    <li className="hover:bg-blue-300 rounded-lg px-4 py-2 cursor-pointer">3</li>
                    <li className="hover:bg-blue-300 rounded-lg px-4 py-2 cursor-pointer">4</li>
                    <li className="hover:bg-blue-300 rounded-lg px-4 py-2 cursor-pointer">5</li>
                    <li>...</li>
                    <li className="hover:bg-blue-300 rounded-lg px-4 py-2 cursor-pointer">10</li>
                </ul>
            </div>
        </div>
    );
}

export default Search;
