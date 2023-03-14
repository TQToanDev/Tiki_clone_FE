function product(prop) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const { name, img, price, sold } = prop.value;
    return (
        <div className="flex flex-col bg-white">
            <div className="w-[200px] h-[200px]">
                <img src={img} alt="" />
            </div>
            <div className="px-3 mt-2 flex w-[200px] flex-col">
                <span className="text-xs h-8 overflow-hidden">{name}</span>
                <div className="flex text-xs mt-2">
                    <span className="text-gray-400">Đã bán:</span>
                    <span className="ml-2 font-semibold">{sold}</span>
                </div>
                <div className="mt-3 mb-2">
                    <span className="font-semibold">{VND.format(price)}</span>
                </div>
            </div>
        </div>
    );
}

export default product;
