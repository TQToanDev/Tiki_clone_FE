import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Slide() {
    return ( 
        <div className="h-full relative">
            <span className="absolute left-0 py-2 bg-slate-200 top-[50%] cursor-pointer"><FontAwesomeIcon icon={faArrowLeft} size={"xl"}/></span>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/d7/0a/52/866f53ee6f75265a2fc95ab10e7cb7ec.png.webp" alt="" />
            <span className="absolute right-0 py-2 bg-slate-200 top-[50%] cursor-pointer"><FontAwesomeIcon icon={faArrowRight} size={"xl"}/></span>
        </div>
     );
}

export default Slide;