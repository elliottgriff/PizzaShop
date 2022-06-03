import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Cheese',
    description: 'Classic Pie with Mozzarella Cheese',
    price: 15.99,
  },
  {
    id: 'm2',
    name: 'Pepperoni',
    description: 'Our Most Popular Pie! Fresh Pepperoni Slices',
    price: 17.99,
  },
  {
    id: 'm3',
    name: 'Pineapple',
    description: 'For Our More Adventurous Eaters',
    price: 19.99,
  },
  {
    id: 'm4',
    name: 'Margherita',
    description: 'A Traditional Style with Fresh Mozz and Basil',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
