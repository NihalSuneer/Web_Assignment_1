import React, { useState } from 'react';
import dumbbellImage from '../images/dumbbell.jpg';
import powerrackImage from '../images/power_rack.jpg';
import treadmillImage from '../images/treadmill.jpg';
import jumpropeImage from '../images/jump_rope.jpg';
import barbellImage from '../images/Barbell.jpg';
import benchImage from '../images/bench.jpg';

const Products = () => {
  // Define state to manage the quantity and cart of each product
  const [quantities, setQuantities] = useState({
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
    product5: 0
  
  });

  const [cart, setCart] = useState([]);

  //  to handle quantity change
  const handleQuantityChange = (productId, quantity) => {
    setQuantities({ ...quantities, [productId]: quantity });
  };

  //  to handle adding items to the cart
  const addToCart = (productId, quantity) => {
    if (quantity > 0) {
      const newItem = { productId, quantity };
      setCart([...cart, newItem]);
      
    }
  };

  //  to handle removing items from the cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    
  };

  
  const finalizePurchase = () => {
    
    alert('Purchase finalized!');
  };

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="works-wrapper">
        {/* Product 1 */}
        <div className="image-full">
        <img src={dumbbellImage} alt="Dumbbell" width={300}/>

          <div>Dumbells(product 1), Price : $7.99</div>
          <input
            type="number"
            min="0"
            value={quantities.product1}
            onChange={(e) => handleQuantityChange('product1', parseInt(e.target.value))}
          />
          <button onClick={() => addToCart('product1', quantities.product1)}>Add to Cart</button>
        </div>

        {/* Product 2 */}
        <div className="image-full">
          <img src={powerrackImage} alt="Product 2" width={300}/>
          <div>Power Rack(product 2), Price : $45.99</div>
          <input
            type="number"
            min="0"
            value={quantities.product2}
            onChange={(e) => handleQuantityChange('product2', parseInt(e.target.value))}
          />
          <button onClick={() => addToCart('product2', quantities.product2)}>Add to Cart</button>
        </div>

       {/* Product 3 */}
       <div className="image-full">
          <img src={treadmillImage} alt="Product 2" width={300}/>
          <div>Treadmills(product 3), Price: $89.99</div>
          <input
            type="number"
            min="0"
            value={quantities.product2}
            onChange={(e) => handleQuantityChange('product2', parseInt(e.target.value))}
          />
          <button onClick={() => addToCart('product2', quantities.product2)}>Add to Cart</button>
        </div>

         {/* Product 4 */}
         <div className="image-full">
          <img src={jumpropeImage} alt="Product 2" width={300}/>
          <div>Jumping Ropes (Product 4), Price: $6.99</div>
          <input
            type="number"
            min="0"
            value={quantities.product2}
            onChange={(e) => handleQuantityChange('product2', parseInt(e.target.value))}
          />
          <button onClick={() => addToCart('product2', quantities.product2)}>Add to Cart</button>
        </div>

         {/* Product 5 */}
         <div className="image-full">
          <img src={barbellImage} alt="Product 2" width={300}/>
          <div>Barbell (product 5), Price: $35.99</div>
          <input
            type="number"
            min="0"
            value={quantities.product2}
            onChange={(e) => handleQuantityChange('product2', parseInt(e.target.value))}
          />
          <button onClick={() => addToCart('product2', quantities.product2)}>Add to Cart</button>
        </div>

        {/* Product 6 */}
        <div className="image-full">
          <img src={benchImage} alt="Product 2" width={300}/>
          <div>Gym Bench (Product 6) , Price: $23.99</div>
          <input
            type="number"
            min="0"
            value={quantities.product2}
            onChange={(e) => handleQuantityChange('product2', parseInt(e.target.value))}
          />
          <button onClick={() => addToCart('product2', quantities.product2)}>Add to Cart</button>
        </div>



       
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {`Product: ${item.productId}, Quantity: ${item.quantity}`}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={finalizePurchase}>Purchase</button>
      </div>
    </div>
  );
};

export default Products;
