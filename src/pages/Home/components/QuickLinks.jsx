function QuickLinks() {
    const datatest = [
        {
            img: 'https://salt.tikicdn.com/cache/w100/ts/upload/73/50/e1/83afc85db37c472de60ebef6eceb41a7.png.webp',
            name: 'Mã giảm giá',
        },
        {
            img: 'https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png',
            name: 'Tiki Exchange',
        },
        {
            img: 'https://salt.tikicdn.com/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png',
            name: 'Giá tốt',
        },
        {
            img: 'https://salt.tikicdn.com/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png',
            name: 'Mua trước trả sau',
        },
        {
            img: 'https://salt.tikicdn.com/ts/upload/66/b9/4f/ab14ee3149780f7d0e44ade4ab16eccd.png',
            name: 'super sale 3.3',
        },
    ];
    return (
        <div className="h-full flex items-center justify-between text-center bg-white">
            {datatest.map((data) => {
                return (
                    <div className="flex flex-col py-5 items-center h-full w-[103px]">
                        <img className="w-[48px]" src={data.img} alt="" />
                        <span className="text-sm mt-3">{data.name}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default QuickLinks;
