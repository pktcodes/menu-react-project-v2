import { useState } from 'react';

import menu from './data';

import Title from './Title';
import Menu from './Menu';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  console.log(categories);

  return (
    <section className="menu">
      <Title text="our menu" />
      <Menu items={menuItems} />
    </section>
  );
};

export default App;
