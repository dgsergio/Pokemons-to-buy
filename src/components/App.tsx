import { useState } from 'react';
import Card from './Card';
import { pokeList as pokes } from '../poke-list';
import { Poke } from '../app.model';

function App() {
  const [total, setTotal] = useState<{ price: number; quantity: number }>({
    price: 0,
    quantity: 0,
  });
  const [msg, setMsg] = useState<string>('');

  const addHandler = (nwPrice: number): void => {
    if (total.price + nwPrice > 999) {
      setMsg("You can't buy more than $999");
      return;
    } else if (total.quantity + 1 > 10) {
      setMsg('You can buy up to 10 item');
      return;
    }
    setTotal((pv) => ({
      price: pv.price + nwPrice,
      quantity: pv.quantity + 1,
    }));
  };

  const clearHandler = (): void => {
    setMsg('');
    setTotal({ price: 0, quantity: 0 });
  };

  return (
    <>
      <h1>Pokemons to buy</h1>
      <main>
        <div className="cards">
          {pokes.map((poke: Poke) => (
            <Card key={poke.id} poke={poke} onAddItem={addHandler} />
          ))}
        </div>
        <div className="cart-btn">
          {msg && (
            <div onClick={() => setMsg('')} className="message error">
              {msg}
            </div>
          )}
          <button title="Click to empty the cart" onClick={clearHandler}>
            {total.quantity.toString()} items - ${total.price.toString()}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
