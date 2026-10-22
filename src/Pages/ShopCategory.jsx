import React, { useContext, useMemo, useState } from 'react'
import "../CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContextValue'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('featured');
  const products = useMemo(() => {
    const categoryProducts = all_product.filter((item) => props.category === item.category);
    if (sortOrder === 'price-low') return [...categoryProducts].sort((a, b) => Number(a.new_price) - Number(b.new_price));
    if (sortOrder === 'price-high') return [...categoryProducts].sort((a, b) => Number(b.new_price) - Number(a.new_price));
    if (sortOrder === 'name') return [...categoryProducts].sort((a, b) => a.name.localeCompare(b.name));
    return categoryProducts;
  }, [all_product, props.category, sortOrder]);
  
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt={`${props.category} collection`} />
      <div className='shopcategory-indexSort'>
        <p><span>Showing {products.length ? `1-${products.length}` : '0'}</span> out of {products.length} products</p>
        <label className='shopcategory-sort'>
          Sort by
          <select aria-label="Sort products" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="name">Name: A to Z</option>
          </select>
          <img src={dropdown_icon} alt="" height="20px" />
        </label>
      </div>
      <div className="shopcategory-products">
        {products.map((item) => <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)}

  
      </div>
     


      {products.length > 12 && <div className="shopcategory-loadmore">Explore More</div>}
    </div>
  )
}

export default ShopCategory
