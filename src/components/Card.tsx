import { Poke } from '../app.model';

const Card = ({
  poke,
  onAddItem,
}: {
  poke: Poke;
  onAddItem(price: number): void;
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={poke.image} alt={poke.name} />
      </div>
      <div className="card-body">
        <h2>
          {poke.name} - ${poke.price.toString()}
        </h2>
        <p>{poke.description}</p>
        <button onClick={() => onAddItem(poke.price)}>Add</button>
      </div>
    </div>
  );
};

export default Card;
