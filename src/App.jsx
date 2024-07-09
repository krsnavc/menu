import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

const tempData = menu.map((item) => item.category);
const tempSet = new Set(tempData);
const allCategory = ['all', ...tempSet];

const App = () => {
  const [menuItem, setMenuItem] = useState(menu);
  const [category, setCategory] = useState(allCategory);
  const filterItems = (category) => {
    if (category == 'all') {
      setMenuItem(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories category={category} filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
};
export default App;
