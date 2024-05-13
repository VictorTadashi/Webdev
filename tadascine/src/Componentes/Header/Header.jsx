import Navbar from "../Navbar/Navbar";


function Header() {
    return (  
        <header className="flex">
            <span>Olá, visitantes</span>
            <h1>Bem-vindo ao Tadascine!!</h1>
            <Navbar/>
        </header>
    );
}

export default Header;