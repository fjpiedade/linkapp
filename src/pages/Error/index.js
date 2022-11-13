import './index.css'
import {Link} from 'react-router-dom'
import { Logo } from '../../components/Logo'

export default function Error(){
    return(
        <div className="error">
            <Logo />
            <h1>404 Page Not Founded</h1>
            <p>The page you are looking for does not exist!</p>

            <Link className="link" to="/">
                back to home ...
            </Link>
        </div>
    )
}