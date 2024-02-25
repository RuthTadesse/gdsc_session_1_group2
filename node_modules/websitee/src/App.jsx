import React, { useState } from 'react';
import laptopImage from './images/laptop.jpg';
import toyImage from './images/toy.jpg';
import carImage from './images/ca.jpg';
import ringImage from './images/ring.jpg';
import cupImage from './images/cup.jpg';
import airpodImage from './images/airpod.jpg';
import penImage from './images/pen.jpg';
import furniImage from './images/furni.jpg';
import furImage from './images/fur.jpg';
import fuImage from './images/fu.jpg';
import laImage from './images/la.jpg';
import lapImage from './images/lap.jpg';
import honeyImage from './images/honey.jpg'; 
import plateImage from './images/plate.jpg';
import ttImage from './images/tt.jpg';
import cuppImage from './images/cupp.jpg';

const TrendingItem = ({ name, price, description, sizes, imageUrl }) => {
 
  const handleSize = (size) => {
    if (name === 'Honey') {
     
      return size;
    } else {
     
      return 'M';
    }
  };

  return (
    <div className="text-center">
      <img src={imageUrl} alt={name} className="mx-auto mb-4" style={{ width: '200px', height: '200px' }} />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-500 mb-2">{description}</p>
      <p className="text-gray-700 font-bold mb-2">${price}</p>
      {sizes && (
        <p className="text-gray-700 font-bold mb-2">Available Sizes: {sizes.join(', ')}</p>
      )}
      {/* Conditionally render size */}
      <p className="text-gray-700 font-bold mb-2">Size: {handleSize(sizes && sizes[0])}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
};

const Navigation = ({ cartCount, totalCartPrice, onCartClick, onProductsClick, onSearchClick, onHomeClick, onHoneyClick }) => (
  <nav className="bg-gray-800 p-4 text-white">
    <ul className="flex justify-between items-center">
      <li>
        <button onClick={onHomeClick} className="text-xl font-bold">Home</button>
      </li>
      <li>
        <button onClick={onProductsClick} className="text-xl font-bold">Products </button>
      </li>
      <li>
        <button onClick={onCartClick} className="text-xl font-bold">Cart ({cartCount}) - Total: ${totalCartPrice.toFixed(2)}</button>
      </li>
      <li>
        <button onClick={onSearchClick} className="text-xl font-bold">Search</button>
      </li>
    </ul>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-800 p-4 text-white text-center w-full pr-12">
    <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
  </footer>
);

const HomePage = ({ onProductsClick }) => {
  return (
    <div className="p-4 text-center bg-gray-100 ">
      <h1 className="text-6xl font-bold mb-12 mt-12 text-black"> <i>WELCOME TO OUR E-COMMERCE WEBSITE</i> </h1>
      <a href="/shop" className="block mx-auto mb-8" style={{ width: '100%', height: '680px' }}>
        <img 
          src={plateImage} 
          alt="E-commerce Banner" 
          className="rounded-lg shadow-md w-full h-full"
        />
      </a>
      <h1 className="text-5xl font-bold mb-4 mt-12 text-black"> <i>CATEGORIES</i> </h1>
      <pre style={{textAlign:'center', color:'black'}}>Discover a world of endless possibilities 
        with our wide range of categories, 
        carefully curated just for you! </pre>
      <pre style={{textAlign:'center', color:'black'}}>Shop now and experience the ultimate online shopping experience at our E-Commerce Store! 🛒✨</pre>
      <h1 className="text-5xl font-bold mb-12 text-black mt-6">
        <button onClick={onProductsClick} className="text-3xl font-bold bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded">
          check
        </button>
      </h1>
      <div className="grid grid-cols-3 gap-12 mx-auto" style={{ paddingLeft:'125px', paddingRight:'125px' , height:'650px'}}>
        <TrendingItem name="laptop" price={800} description="Electronics" imageUrl={laptopImage} />
        <TrendingItem name="toy" price={302} description="Toys" imageUrl={toyImage} />
        <TrendingItem name="car" price={25000000} description="Cars" imageUrl={carImage} />
      </div> 
      <h1 className="text-5xl font-bold mb-12 mt-12 text-black"> <i> OUR TRENDING ITEMS</i> </h1>
      <pre style={{textAlign:'center', color:'black'}}>Looking for the hottest items on the market? Look no further! Check out our trending selection </pre>
      <pre style={{textAlign:'center', color:'black'}}>and stay ahead of the curve with the latest and greatest products🛒✨</pre>
      <h1 className="text-3xl font-bold mb-12 text-black mt-6">
        <button onClick={onProductsClick} className="text-5xl font-bold bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded">
          check
        </button>
      </h1>
      <div className="grid grid-cols-3 gap-12 "style={{paddingLeft:'125px', paddingRight:'125px',  height:'650px'}}>
        <TrendingItem name="ring" price={40000} description="Product 4 description" imageUrl={ringImage} />
        <TrendingItem name="cup" price={20} description="Product 5 description" imageUrl={cupImage} style={{marginBottom:'23px'}} />
        <TrendingItem name="airpod" price={30} description="Product 6 description" imageUrl={furImage} />
      </div> 
      <h1 className="text-5xl font-bold mb-12 mt-12 text-black"> <i> PRODUCTS</i> </h1>
      <pre style={{textAlign:'center', color:'black'}}>we pride ourselves on offering a wide selection of high-quality products </pre>
      <pre style={{textAlign:'center', color:'black'}}>Whether you're looking for electronics, toys, fashion accessories. 🛒✨</pre>
      <button onClick={onProductsClick} className="text-3xl font-bold bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded mt-6 mb-12">
        check
      </button>
      <div className="grid grid-cols-3 gap-12 "style={{paddingLeft:'125px', paddingRight:'125px',  height:'650px'}}>
        <TrendingItem name="ring" price={40000} description="Honey" imageUrl={honeyImage} />
        <TrendingItem name="cup" price={20} description="bear" imageUrl={fuImage} style={{marginBottom:'400px'}} />
        <TrendingItem name="airpod" price={30} description="Product 6 description" imageUrl={ttImage} />
      </div>
    </div>
  );
};

const HoneyPage = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');
  const [totalPrice, setTotalPrice] = useState(12.99 * quantity); // Initial total price based on quantity
  const [redirectToConfirmation, setRedirectToConfirmation] = useState(false);


  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
    calculateTotalPrice(selectedSize, quantity);
  };
const handleQuantityChange = (event) => {
  const value = parseInt(event.target.value);
  const newQuantity = value >= 1 ? value : 1;
  setQuantity(newQuantity);
  calculateTotalPrice(size, newQuantity); // Recalculate total price based on new quantity
};

  const calculateTotalPrice = (selectedSize, selectedQuantity) => {
    let pricePerUnit = 12.99; 
    if (selectedSize === 'S') {
      pricePerUnit -= 2; 
    } else if (selectedSize === 'L') {
      pricePerUnit += 2; 
    }
    const total = pricePerUnit * selectedQuantity;
    setTotalPrice(total);
  };

  const handleAddToCart = () => {
    addToCart({
      id: 13,
      name: 'Honey',
      price: totalPrice,
      imageUrl: honeyImage,
      size: size,
      quantity: quantity,
    });
  };
  

  if (redirectToConfirmation) {
    // Redirect to confirmation page
    window.location.href = '/confirmation'; // Redirect to confirmation page
  }
  return (
    <div style={{ padding: '100px',backgroundColor: '#fff' }}>
      
      <div style={{ display: 'flex', marginBottom: '1rem' , paddingleft:'180px', justifyContent:'space-evenly' }}>
        <div style={{ flex: '1', marginRight: '100px' }}>
        <img src={honeyImage} alt="Honey" style={{ width: '100%', height: '600px', paddingRight: '80px', paddingLeft: '102px', borderRadius: '0.5rem' }} />

        </div>
        <div style={{ flex: '2' }}>
          <p style={{ fontSize: '70px', fontWeight:'bold',marginBottom: '0.5rem', color: '#4B5563' }}>Natural Honey Bottle</p>
          <p style={{color:'#4B5563'}}>$99</p>
          <p style={{ fontSize: '1rem', color: '#6B7280' }}>Honey is a natural sweet substance produced by bees from the nectar of flowers. It has been used by humans </p>
          <p style={{ fontSize: '1rem', marginBottom: '1rem', color: '#6B7280' }}> for thousands of years as a sweetener, flavoring agent, and for its medicinal properties..</p>
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#4B5563' }}>Size:</p>
          <div style={{ marginBottom: '1rem' }}>
            <button onClick={() => handleSizeChange('S')} style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#6EE7B7', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>S</button>
            <button onClick={() => handleSizeChange('M')} style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#6EE7B7', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>M</button>
            <button onClick={() => handleSizeChange('L')} style={{ padding: '0.5rem 1rem', backgroundColor: '#6EE7B7', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>L</button>
          </div>
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#4B5563' }}>Quantity:</p>
          <input type="number" value={quantity} onChange={handleQuantityChange} style={{ width: '4rem',backgroundColor: '#3B82F6', padding: '0.5rem', marginRight: '0.5rem', borderRadius: '0.25rem', border: '1px solid #D1D5DB', color: '#4B5563' }} />
          <button onClick={handleAddToCart} style={{ backgroundColor: '#3B82F6', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>Add to Cart (${totalPrice.toFixed(2)})</button>
        </div>
      </div>
    </div>
  );
};
const SearchPage = ({ products, addToCart }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');

  const handleSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = query.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    if (filteredProducts.length > 0) {
      setSearchResults(filteredProducts);
      setSearchMessage('');
    } else {
      setSearchResults([]);
      setSearchMessage('No products found.');
    }
  };

  const categoryButtons = [
    { name: 'Laptop', query: 'laptop' },
    { name: 'Toy', query: 'toy' },
    { name: 'Car', query: 'car' },
    { name: 'Ring', query: 'ring' },
    { name: 'Cup', query: 'cup' },
    { name: 'Airpod', query: 'airpod' },
    { name: 'furniture', query: 'furniture' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Products</h2>
      <p>You can search any category here. All you have to do is click from the category and hit the search button. This will render all related products to your page.</p>
      <p className='mb-12'>Happy shopping!</p>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={handleSearchInputChange}
          placeholder="Enter product name..."
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />
        <div className="flex">
          <div
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
            onClick={handleSubmit}
          >
            Search
          </div>
        </div>
      </form>
      <div className="flex flex-wrap">
        {categoryButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => setQuery(button.query)}
            className="m-1 px-4 py-2 bg-gray-800 text-white rounded-md"
          >
            {button.name}
          </button>
        ))}
      </div>
      {searchMessage && <p>{searchMessage}</p>}
      {searchResults.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
          {searchResults.map(product => (
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
      )}
    </div>
  );
};

const Cart = ({ cart, removeFromCart }) => {
  // Calculate total price and total quantity
  const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalCartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const shippingCost = 5;
  const totalPriceWithShipping = totalCartPrice + shippingCost;
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

  const handleCheckout = () => {
    setIsCheckoutClicked(true);
  };

  return (
    <div className="p-32 w-full bg-gray-100 flex justify-between">
      {!isCheckoutClicked ? (
        <div style={{ paddingLeft: '123px', paddingRight: '300px', color: 'black' }}>
          <h2 className="text-2xl font-bold mb-4 text-center"> Your Shopping Cart</h2>
          <p className="text-xl font-bold mb-4 text-center">Not ready to checkout? Continue Shopping</p>
          {cart.length === 0 ? (
            <p className="text-xl font-bold mb-4 text-gray-400 text-center"> Your cart is empty</p>
          ) : (
            <div>
              <ul>
                {cart.map(item => (
                  <li key={item.id} className="flex justify-between items-center border-b p-2">
                    <img src={item.imageUrl} alt={item.name} className="w-12 h-12 mr-4" />
                    <div>
                      <p>{item.name}</p>
                      <p>Size: {item.size}</p>
                      <p>Quantity: {item.quantity}</p>
                      <span>${(item.price * item.quantity).toFixed(2)}</span> {/* Corrected calculation */}
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <ConfirmationPage cart={cart} />
      )}
      {!isCheckoutClicked && (
        <div style={{ width: '100%' }}>
          <div className="text-right">
            <div>
              <p className="text-xl font-bold text-black">Total Quantity: {totalCartQuantity}</p>
              <p className="text-xl font-bold text-black">Subtotal: ${totalCartPrice.toFixed(2)}</p>
              <p className="text-xl font-bold text-black">Shipping: ${shippingCost.toFixed(2)}</p>
              <hr />
              <p className="text-xl font-bold text-black">Total Price (including shipping): ${totalPriceWithShipping.toFixed(2)}</p>
              <button
                onClick={handleCheckout}
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded pr-6"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const ProductsPage = ({ products, addToCart, onHoneyClick }) => (
  <div className="p-4 w-full ml-4 bg-gray-100">
    <h2 className="text-5xl font-bold mb-5 " style={{textAlign:'center' ,color:'black'}}>Products</h2>
    <div className="grid grid-cols-5 gap-12">
      {products.map(product => (
        <div key={product.id} className="p-4 border bg-white rounded-lg overflow-hidden shadow-md w-full">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="mb-2 rounded-md object-cover w-full h-64"  
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          {/* Add conditional rendering for the "Add to Cart" button */}
          {product.name.toLowerCase() === 'honey' ? (
            <button onClick={onHoneyClick} className="mt-4 pb-4 bg-blue-500 text-white px-4 py-2 rounded">
              View Details
            </button>
          ) : (
            <button onClick={() => addToCart({...product, quantity: 1})} className="mt-4 pb-4 bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);

const ConfirmationPage = ({ cart }) => {
  return (
    <div className="p-4 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-black">Order Confirmation</h2>
      {cart.length === 0 ? (
        <p className="text-xl font-bold text-red-500">You didn't buy anything, you poor soul!</p>
      ) : (
        <>
          <p className="text-xl font-bold mb-4 text-black">Thank you for your purchase!</p>
          <p className="text-lg font-bold mb-2 text-black">You have bought:</p>
          <ul className="text-left text-black">
            {cart.map(item => (
              <li key={item.id}>
                {item.name} x {item.quantity} {item.size ? `- Size: ${item.size}` : ''}
              </li>
            ))}
          </ul>
          <p className="text-lg mt-4 text-black">Your order will be processed shortly.</p>
        </>
      )}
    </div>
  );
};


const App = () => {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const products = [
    { id: 1, name: 'Laptop', price: 800, imageUrl: laptopImage },
    { id: 2, name: 'Toy', price: 302, imageUrl: toyImage },
    { id: 3, name: 'Car', price: 25000000, imageUrl: carImage },
    { id: 4, name: 'Ring', price: 40000, imageUrl: ringImage },
    { id: 5, name: 'Cup', price: 20, imageUrl: cupImage },
    { id: 6, name: 'Airpod', price: 30, imageUrl: furImage },
    { id: 7, name: 'Furniture', price: 2000, imageUrl: furniImage },
    { id: 8, name: 'Furniture', price: 30, imageUrl: furImage },
    { id: 9, name: 'Furniture', price: 30, imageUrl: fuImage },
    { id: 10, name: 'Laptop', price: 30, imageUrl: laImage },
    { id: 11, name: 'Laptop', price: 30, imageUrl: lapImage },
    { id: 12, name: 'Honey', price: 30, imageUrl: honeyImage },
    { id: 13, name: 'Toy', price: 30, imageUrl: ttImage },
    { id: 14, name: 'Cup', price: 30, imageUrl: cuppImage },
  ];

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
  
    if (existingProductIndex !== -1) {
     
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + product.quantity
      };
      setCart(updatedCart);
    } else {
      // If the product does not existtttt
      setCart(prevCart => [...prevCart, product]);
    }
  };
  

  const removeFromCart = (productId) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === productId);
    if (index !== -1) {
      if (updatedCart[index].quantity > 1) {
      
        updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity - 1 };
      } else {
        
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
    }
  };
  

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  let content;
  switch (currentPage) {
    case 'home':
      content = <HomePage onProductsClick={() => navigateToPage('products')} />;
      break;
    case 'products':
      content = <ProductsPage products={products} addToCart={addToCart} onHoneyClick={() => navigateToPage('honey')} />;
      break;
    case 'honey':
      content = <HoneyPage addToCart={addToCart} />;
      break;
    case 'search':
      content = <SearchPage products={products} addToCart={addToCart} />;
      break;
    case 'cart':
      content = <Cart cart={cart} removeFromCart={removeFromCart} />;
      break;
    default:
      content = <HomePage onProductsClick={() => navigateToPage('products')} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        totalCartPrice={cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        onCartClick={() => navigateToPage('cart')}
        onProductsClick={() => navigateToPage('products')}
        onSearchClick={() => navigateToPage('search')}
        onHomeClick={() => navigateToPage('home')}
        onHoneyClick={() => navigateToPage('honey')}
      />
      <div className="flex-grow">
        {content}
      </div>
      <Footer />
    </div>
  );
};


export default App;
