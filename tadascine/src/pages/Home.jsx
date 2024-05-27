import data from '../../artigos.json'

function Home() {
    console.log(data)
    return (  
        <>
        <main>
            <input type="text" name="busca" id="busca" placeholder="Digite aqui sua busca:" />
            <div className="lista-filmes">
                <div className='grid grid-cols-3 gap-4'>

                {data.map(filme => (
                    <div className='card' key = {filme.title}>
                     <h1>{filme.title}</h1>
                     <img src={filme.image} alt={filme.title}/>
                     <div className='tag bg-primary-raul'>
                        {filme.tags.map(tag => (
                            <span key={tag}> {tag} </span>
                        ))}
                     </div>
                     <div className='text bg-gray-500'>
                        {filme.tags.map(text => (
                            <span key={text}> {text} </span>
                        ))}
                     </div>
                    </div>

                    
                )
                )
                }
                </div>
            </div>
        </main>
        </>
    );
}

export default Home;