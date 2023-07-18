import { useState } from 'react';

import menu from './data';

import Title from './Title';
import Menu from './Menu';

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  return (
    <section className="menu">
      <Title text="our menu" />
      <Menu items={menuItems} />
    </section>
  );
};

export default App;
