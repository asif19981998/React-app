import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const categories = ["all",...new Set(items.map(item=> item.category)) ]



function App() {
  const [menuItems,setMenuItems]=useState(items)
  const [categoryList,setCategories]=useState(categories)
  const filterItems = (category)=>{
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(item=>item.category == category)
    setMenuItems(newItems)
   
  }
  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categoryList} filterItems={filterItems} />
        <Menu items={menuItems}/>
      </section>
    </main>
  )
  
}

export default App;
