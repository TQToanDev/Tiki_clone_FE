function Sale() {
    const dataTest = [
        {
            img: 'https://salt.tikicdn.com/cache/750x750/ts/product/07/ff/4f/0806795d4db5340f7b8b02b664f930b0.jpg.webp',
            price: '125.000',
            sale: '-26%',
        },
        {
            img: 'https://salt.tikicdn.com/cache/750x750/ts/product/e1/6a/62/212e7a56dc659d171af6527a64dacc06.jpg.webp',
            price: '201.000',
            sale: '-37%',
        },
        {
            img: 'https://salt.tikicdn.com/cache/280x280/ts/product/7d/12/60/348a018ec9fe59b0610ec4b066a1dafd.png',
            price: '15.000.000 ',
            sale: '-47%',
        },
        {
            img: 'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/00/3c/85/9b42883482347330ecf19c05ac7d3c83.jpg.webp',
            price: '410.000',
            sale: '-41%',
        },
        {
            img: 'https://salt.tikicdn.com/cache/750x750/ts/product/41/5c/a4/895076bf809027a561ab40366a7ed413.jpg.webp',
            price: '94.000',
            sale: '-10%',
        },
        {
            img: 'https://salt.tikicdn.com/cache/750x750/ts/product/71/67/89/3a96862191f038dcc8f7e1b5a805e83f.png.webp',
            price: '183.000',
            sale: '-49%',
        },
        {
            img: 'https://salt.tikicdn.com/cache/750x750/ts/product/ee/21/7e/760a12939d0c5a734aa203f303566cd4.jpg.webp',
            price: '92.000',
            sale: '-32%',
        },
    ];
    return (
        <div className="h-full flex flex-col bg-white">
            <div className="h-[55px] flex items-center">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="" />
                {/* <img src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg" alt="" /> */}
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="" />
                <div className="ml-3 text-center flex items-center">
                    <span className="bg-red-700 px-1 pb-[2px] text-white rounded-lg mr-1">03</span>:
                    <span className="bg-red-700 px-1 pb-[2px] text-white rounded-lg mx-1">03</span>:
                    <span className="bg-red-700 px-1 pb-[2px] text-white rounded-lg mx-1">03</span>
                </div>
            </div>
            <div className="h-[216px] flex flex-wrap overflow-hidden items-center justify-between">
                {dataTest.map((data) => {
                    return (
                        <div className="w-[150px] h-full mx-2">
                            <img src={data.img} alt="" />
                            <div className="w-[80%] text-red-500  flex justify-around items-center">
                                <span className="font-medium">{data.price}</span>
                                <span className="-700 font-bold underline decoration-1">đ</span>
                                <span className="text-sm font-medium">{data.sale}</span>
                            </div>
                            <div className="mt-2 bg-red-300 rounded-xl mx-1 h-[20px] flex items-center">
                                <span className="text-sm ml-3">Vừa mở bán</span>
                                <div></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Sale;
