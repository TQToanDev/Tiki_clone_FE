import Header from "../Header";

function Layout({children}) {
    return ( 
        <div className="bg-gray-100 min-h-screen m-0 p-0 box-border flex flex-col items-center">
            <Header />
            <div className="w-[1240px]">
                {children}
            </div>
        </div>
     );
}

export default Layout;