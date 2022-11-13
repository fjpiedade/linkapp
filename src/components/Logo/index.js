import './index.css'
import {Link} from 'react-router-dom'
import Raiztech from '../../assets/raiztech.svg'

export function Logo(){
    return(
        <div className="logo">
            <Link to="/">
                <img src={Raiztech} alt="Raiz Tech Logo" width={100} height={100}/>
            </Link>
        </div>
    )
}