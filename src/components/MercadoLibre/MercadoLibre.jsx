import { useState, useEffect } from "react";
const MercadoLibre = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=parlantes')
      .then((response) => response.json())
      .then((json) => setProducts(json.results.slice(0,10)));
  }, []);
  return (
    <>
      <h1>Products</h1>
      <div>
        {products.map((prod) => {
          return (
            <div>
              <h1>{prod.title}</h1>
              <form onSubmit={search} >
                <input value={input} onChange={(e)=> setInput (e.target.value)} />
                <button>Search</button>
              </form>
              <img src={prod.thumbnail} />
              <h3>${prod.price}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MercadoLibre;
