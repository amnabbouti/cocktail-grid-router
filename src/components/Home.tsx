import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const cocktail = data.drinks[0];

  return (
    <div>
      <h1>Random Cocktail</h1>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
    </div>
  );
};

export default Home;
