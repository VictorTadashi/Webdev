import Navbar from "../Navbar/Navbar";


function Header() {
    return (  
        <header className="flex justify-around bg-primary-raul text-slate-50 p-4">
            <span>Olá, visitantes</span>
            <h1>Bem-vindo ao Tadascine!!!</h1>
            <Navbar/>
        </header>
    );
}

export default Header;