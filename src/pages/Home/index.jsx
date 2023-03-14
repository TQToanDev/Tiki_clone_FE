import Slide from './components/Slide';
import Sale from './components/Sale';
import QuickLinks from './components/QuickLinks';
import ProductList from './components/ProductList';

function Home() {
    return (
        <div className="flex justify-center">
            <div className="h-fit">
                <div className="flex justify-between my-4">
                    <div className="w-[824px] h-[274px] ">
                        <Slide />
                    </div>
                    <div className="w-[408px] h-[274px]">
                        <img
                            className="rounded-lg"
                            src="https://salt.tikicdn.com/cache/w750/ts/banner/f9/1a/9d/51593dbf83bfe9a2e5a4c10a1e75bbbc.png.webp"
                            alt=""
                        />
                    </div>
                </div>
                <div className="h-[274px]">
                    <Sale />
                </div>
                <div className="h-[136px] my-4 ">
                    <QuickLinks />
                </div>
                <div className="h-[1000px]">
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default Home;
