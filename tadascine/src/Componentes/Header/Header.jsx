import Navbar from "../Navbar/Navbar";


function Header() {
    return (  
        <header className="flex justify-between text-slate-50 p-4">
            <h1 className="text-3xl">TadasCine</h1>
            <Navbar/>
        </header>
    );
}

export default Header;