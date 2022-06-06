import { data } from './data/menu-data';

const Ingredients = ({ data = [] }) => (
  <ul className='ingredients'>
    {data.map((ingredient, i) => (
      <li key={i}>{ingredient.name}</li>
    ))}
  </ul>
);

const Instructions = ({ data = [] }) => (
  <section className='instructions'>
    <h2>Cooking Instructions</h2>
    {data.map((step, i) => (
      <p key={i}>{step}</p>
    ))}
  </section>
);

const Recipe = ({ name, ingredients, steps }) => (
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <Ingredients data={ingredients} />
    <Instructions data={steps} />
  </section>
);

const Menu = ({ title, recipes }) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className='recipes'>
      {recipes.map((recipe, i) => {
        console.log('😄😄😄', recipe);
        return <Recipe key={i} {...recipe} />;
      })}
    </div>
  </article>
);

const MenuApp = () => {
  return <Menu recipes={data} title='Delicious Recipes' />;
};

export default MenuApp;
