import { useContext } from 'react';
import Product from './Product';

import { AppContext } from '../../../context/AppContext';

//     {
//         name: 'Giày sneaker nữ New Balance 574 Classic',
//         img: 'https://salt.tikicdn.com/cache/750x750/ts/product/00/80/ab/69873bc7d00b491cb9b9301bca214e4b.jpg.webp',
//         price: '897.000 ₫',
//         rate: '5',
//         sold: '20',
//     },
//     {
//         name: 'Giày chạy bộ nam Under Armour HOVR Machina 2 SE',
//         img: 'https://salt.tikicdn.com/cache/750x750/ts/product/7f/4a/d2/fa3709b0ccc19b217acf9d4cc0dbd45c.png.webp',
//         price: '2.417.000 ₫',
//         rate: '4',
//         sold: '60',
//     },
//     {
//         name: 'Giày Thể Thao Nữ NEW BALANCE Cushioning WNRGSB',
//         img: 'https://salt.tikicdn.com/cache/750x750/ts/product/39/69/65/68891a93d5265435fc585f4b39e50fed.jpg.webp',
//         price: '698.000 ₫',
//         rate: '3',
//         sold: '630',
//     },
// ];

function ProductList() {
    const { productList } = useContext(AppContext);

    return (
        <div className="flex flex-wrap items-stretch gap-2">
            {productList.map((product) => {
                return <Product data={product} key={product.name} />;
            })}
        </div>
    );
}

export default ProductList;
