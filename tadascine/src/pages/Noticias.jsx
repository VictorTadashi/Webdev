import data from "../../artigos.json";

function Noticias() {
  return (
    <main className="text-white">
        <h1 className='text-2xl mb-3 text-white ml-10 mr-10 border-b-2'>
                    Notícias
            </h1>
      <div>
        <div className="grid grid-cols-2 gap-10">
          {data.map((noticias) => (
            <div className="card border" key={noticias.title}>
                
              <img className="h-96 w-full" src={noticias.image} />
              <h1 className="text-center text-2xl">{noticias.title}</h1>
              <p className="mx-20">{noticias.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Noticias;