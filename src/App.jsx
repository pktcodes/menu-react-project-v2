import { useState } from 'react';

import menu from './data';

import Title from './Title';
import Categories from './Categories';
import Menu from './Menu';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="menu">
      <Title text="our menu" />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  );
};

export default App;
