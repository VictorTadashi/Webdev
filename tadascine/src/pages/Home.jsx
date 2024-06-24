import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [filmes, setFilmes] = useState([])
    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

useEffect(() => {
    fetch(`${urlBase}now_playing?${apiKey}`)
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(erro => console.log(erro))
},[])

const [filmes2, setFilmes2] = useState([])
    const apiKey2='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase2 = 'https://api.themoviedb.org/3/movie/'
    const urlImg2 = 'https://image.tmdb.org/t/p/w342/'

useEffect(() => {
    fetch(`${urlBase2}upcoming?${apiKey2}`)
    .then(response => response.json())
    .then(response => setFilmes2(response.results))
    .catch(erro => console.log(erro))
},[])
   

    return (
        <main className=" px-12">
            <h1 className='text-2xl mb-3 text-white ml-10 mr-10 border-b-2'>
                    Em Cartaz
            </h1>
            <div className="grid grid-cols-4 gap-20 px-10">
                {filmes.slice(0,4).map((filme) => (
                    <div className="card-filme" key={filme.id}>
                        <Link to={`filmes/${filme.id}`} className="bg-blue-500">
                            <img className="rounded-xl w-full" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                            <div className='bg-red-800 mt-2 rounded-lg px-2 py-1 mb-4'>
                                <h1 className="text-white text-xl">{filme.title}</h1>
                                <h2 className="text-white">Lançamento: {filme.release_date}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <h1 className='text-2xl mb-3 text-white ml-10 mr-10 border-b-2'>
                    Em Breve
            </h1>
            <div className="grid grid-cols-4 gap-20 px-10">
                {filmes2.slice(0,4).map((filme2) => (
                    <div className="card-filme" key={filme2.id}>
                        <Link to={`filmes/${filme2.id}`} className="bg-blue-500">
                            <img className="rounded-xl w-full" src={`${urlImg2}${filme2.poster_path}`} alt={filme2.title} />
                            <div className='bg-red-700 mt-2 rounded-lg px-2 py-1 mb-4'>
                                <h1 className="text-white text-xl">{filme2.title}</h1>
                                <h2 className="text-white">Lançamento: {filme2.release_date}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Home;