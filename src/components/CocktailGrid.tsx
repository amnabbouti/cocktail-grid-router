import useSWR from 'swr';
import { Link } from 'react-router-dom';
import '../App.css';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CocktailGrid = () => {
  const { data, error } = useSWR(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon',
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="grid-title">Cocktail List</h1>
      <div className="grid-container">
        {data.drinks.map(
          (drink: {
            idDrink: string;
            strDrink: string;
            strDrinkThumb: string;
          }) => (
            <Link
              key={drink.idDrink}
              to={`/cocktails/${drink.idDrink}/${drink.strDrink.replace(/\s+/g, '-').toLowerCase()}`}
              className="cocktail-link"
            >
              <div className="cocktail-card">
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="cocktail-image"
                />
                <h3>{drink.strDrink}</h3>
              </div>
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default CocktailGrid;
