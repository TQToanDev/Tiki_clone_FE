import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function ProductInfo() {
    return ( 
        <div className=" pt-5 flex flex-col">
            <div className="flex justify-between bg-white">
                <div className="w-[460px]">
                    <img src="https://salt.tikicdn.com/cache/750x750/ts/product/69/b4/49/809c1b6bb10639949f8115a3edfe681c.png.webp" alt="" />
                </div>
                <div className="w-[740px] flex flex-col py-3">
                    <div>
                        <h1 className='text-2xl font-semibold'>Điện thoại Samsung Galaxy Z Flip 4 (8GB/128GB)</h1>
                        <div className="flex items-center">
                            <div className='flex items-center pr-2'>
                                <FontAwesomeIcon icon={faStar} color={"yellow"} />
                                <FontAwesomeIcon icon={faStar} color={"yellow"}/>
                                <FontAwesomeIcon icon={faStar} color={"yellow"}/>
                                <FontAwesomeIcon icon={faStar} color={"yellow"}/>
                                <FontAwesomeIcon icon={faStar} color={"yellow"}/>
                                <FontAwesomeIcon icon={faStar} color={"yellow"}/>
                            </div>
                            <i className='border-r border-black h-3 mr-2'></i>
                            <span>Đã bán 112</span>
                        </div>
                    </div>
                    <div className='my-5 ml-3'>
                        <span className='text-red-500 font-semibold text-4xl'>22.000.000 đ</span>
                    </div>
                    <div>
                        <span>Màu sắc: </span>
                        <span className='font-semibold'>Tím</span>
                        <ul className='mt-2 flex flex-wrap gap-4 w-[400px]'>
                            <li className='border border-black py-2 px-3 cursor-pointer rounded-lg bg-gray-400'>Màu Tím</li>
                            <li className='border border-black py-2 px-3 cursor-pointer rounded-lg'>Màu Vàng</li>
                            <li className='border border-black py-2 px-3 cursor-pointer rounded-lg'>Màu Xanh Dương</li>
                            <li className='border border-black py-2 px-3 cursor-pointer rounded-lg'>Màu Xám</li>
                            <li className='border border-black py-2 px-3 cursor-pointer rounded-lg'>Màu Trắng</li>
                        </ul>
                    </div>
                    <div className='my-5'>
                        <span>Số Lượng</span>
                        <div className='border border-black w-fit text-center my-2'>
                            <span className='w-[24px] h-[24px] px-2 border-r border-black'>+</span>
                            <input 
                                type="text" 
                                value={1}
                                className='w-[32px] text-center bg-transparent outline-none' 
                            />
                            <span className='w-[24px] h-[24px] px-2 border-l border-black'>-</span>
                        </div>
                    </div>
                    <div>
                        <button className='bg-red-500 text-white text-xl rounded text-center px-20 py-3'>Mua hàng</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col my-2 bg-white px-5 py-3'>
                <h2 className='text-xl mb-2'>Mô tả sản phẩm</h2>
                <div>
                    <p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. 
                        Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng
                         mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                          phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ
                           nước ngoài có giá trị trên 1 triệu đồng).....</p>
                </div>
            </div>
        </div>
     );
}

export default ProductInfo;