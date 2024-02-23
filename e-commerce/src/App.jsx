import React, { useState } from 'react';

const TrendingItem = ({ name, price, description, imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <div className="p-4 border bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={imageUrls[currentImageIndex]}
        alt={name}
        className="mb-2 rounded-md object-cover w-full h-54"
        onClick={changeImage}
      />
      <p className="text-lg font-bold">{name}</p>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-800 mt-2">${price.toFixed(2)}</p>
    </div>
  );
};

const ProductList = ({ products, addToCart }) => (
  <div>
    <h1 className="text-3xl font-bold mb-4 text-black ">Product</h1>
    <div className="grid grid-cols-4 gap-4 ">
      {products.map(product => (
        <div key={product.id} className="p-4 border bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="mb-2 rounded-md object-cover w-full h-32"
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 pb-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);

const Navigation = ({ cartCount, totalCartPrice, onCartClick, onProductsClick, onHomeClick }) => (
  <nav className="bg-gray-800 p-4 text-white">
    <ul className="flex justify-between items-center">
      <li>
        <button onClick={onHomeClick} className="text-xl font-bold">Home</button>
      </li>
      <li>
        <button onClick={onProductsClick} className="text-xl font-bold">Products</button>
      </li>
      <li>
        <button onClick={onCartClick} className="text-xl font-bold">Cart ({cartCount}) - Total: ${totalCartPrice.toFixed(2)}</button>
      </li>
    </ul>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-800 p-4 text-white text-center grid grid-cols-12 gap-4">
    <p>&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
  </footer>
);

const Products = ({ products, addToCart }) => (
  <div className="grid grid-cols-4 gap-4">
    {products.map(product => (
      <div key={product.id} className="p-4 border bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="mb-2 rounded-md object-cover w-full h-64"  
        />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 pb-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
);

const Cart = ({ cart, removeFromCart }) => {
  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-black text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b p-2">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xl font-bold text-black">Total Price: ${totalCartPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 800, imageUrl: 'laptop.jpg' },
    { id: 2, name: 'Product 2', price: 302, imageUrl: 'toy.jpg' },
    { id: 3, name: 'Product 3', price: 25000000, imageUrl: 'car.jpg' },
    { id: 4, name: 'Product 4', price: 40000, imageUrl: 'ring.jpg' },
    { id: 5, name: 'Product 5', price: 20, imageUrl: 'cup.jpg' },
    { id: 6, name: 'Product 6', price: 30, imageUrl: 'airpod.jpg' },
    { id: 7, name: 'Product 7', price: 25, imageUrl: 'pen.jpg' },
    { id: 8, name: 'Product 8', price: 40, imageUrl: 'plate.jpg' },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const [showCart, setShowCart] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showHome, setShowHome] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-gray-500">
      <Navigation
        cartCount={cart.length}
        totalCartPrice={cart.reduce((total, item) => total + item.price, 0)}
        onCartClick={() => {
          setShowCart(true);
          setShowProducts(false);
          setShowHome(false);
        }}
        onProductsClick={() => {
          setShowProducts(true);
          setShowCart(false);
          setShowHome(false);
        }}
        onHomeClick={() => {
          setShowHome(true);
          setShowCart(false);
          setShowProducts(false);
        }}
      />
      {showCart ? (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      ) : showProducts ? (
        <Products products={products} addToCart={addToCart} />
      ) : showHome ? (
        <HomePage />
      ) : (
        <div></div>
      )}
      <Footer />
    </div>
  );
};

const HomePage = () => (
  <div className="container mx-auto p-4 text-center">
    <h1 className="text-6xl font-bold mb-12 text-black">Welcome to our e-commerce website</h1>

    <h2 className="text-3xl font-bold mb-12 text-black">Trending Items</h2>

    <div className="grid grid-cols-3 gap-12">
      <TrendingItem name="Trend 1" price={152} description="Mina Furniture" imageUrls={["furni.jpg", "url_to_image_1_2"]} />
      <TrendingItem name="Trend 2" price={75} description="Toys collection" imageUrls={["bear.jpg", "url_to_image_2_2"]} />
      <TrendingItem name="Trend 3" price={60} description="Traditional kitchen" imageUrls={["kitchen.jpg", "url_to_image_3_2"]} />
      <TrendingItem name="Trend 4" price={50} description="Impress your spouse furniture" imageUrls={["kichenn.jpg", "url_to_image_4_2"]} />
      <TrendingItem name="Trend 5" price={75} description="Kiki nail design" imageUrls={["nail.jpg", "url_to_image_5_2"]} />
      <TrendingItem name="Trend 6" price={60} description="Biruk's design" imageUrls={["cloth.jpg", "url_to_image_6_2 "]} />
    </div>
  </div>
);

export default App;
