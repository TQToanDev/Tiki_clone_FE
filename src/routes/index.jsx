import Layout from '../components/layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ProductInfo from '../pages/ProductInfo';
import Search from '../pages/Search';

const publicRoutes = [
    { path: '/', component: Home, layout: Layout },
    { path: '/cart', component: Cart, layout: Layout },
    { path: '/productInfo', component: ProductInfo, layout: Layout },
    { path: '/search', component: Search, layout: Layout },
];

const routes = { publicRoutes };

export default routes;
