import {Link} from 'react-router-dom'
function Navbar() {
    return (  
        <nav>
            <ul className="flex gap-10 text-xl py-2">
                <li className="hover:underline"><Link to ="/"> Home </Link></li>
                <li className="hover:underline"><Link to ="noticias"> Notícias </Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;