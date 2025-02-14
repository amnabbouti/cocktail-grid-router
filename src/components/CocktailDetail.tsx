import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import '../App.css';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CocktailDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error } = useSWR(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const cocktail = data.drinks[0];

  return (
    <div className="detail-container">
      <h1 className="detail-title">{cocktail.strDrink}</h1>
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="detail-image"
      />
      <p className="detail-instructions">{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetail;
