// src/contexts/ProductContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

const ProductContext = createContext();

export function useProducts() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Category-specific placeholder images
    const placeholderImages = {
      tshirts: 'https://t4.ftcdn.net/jpg/03/64/59/39/240_F_364593934_NiedLoRk6irNZe9PrAmVBQnIJ6wmQHre.jpg',
      shirts: 'https://t3.ftcdn.net/jpg/02/14/00/52/240_F_214005236_EfyYEUQ8fMglRGNx2S0aXnIW1tl9wxU1.jpg',
      lowers: 'https://t3.ftcdn.net/jpg/09/55/74/86/240_F_955748686_ItBcVFpUETPgyDNY1IK4t5cwsli90bpU.jpg',
      shoes: 'https://t3.ftcdn.net/jpg/12/01/18/14/240_F_1201181448_ZwnxWY8cIrtniBYGGrM8nmpQc7U403Xz.jpg'
    };

    const initProducts = [
      // T-Shirts
      {
        id: 1,
        name: 'Classic Cotton T-Shirt',
        category: 'tshirts',
        price: 2489,
        discountPrice: 1659,
        image: placeholderImages.tshirts,
        description: 'Comfortable cotton t-shirt with a classic fit'
      },
      {
        id: 2,
        name: 'Graphic Print T-Shirt',
        category: 'tshirts',
        price: 2904,
        discountPrice: 2074,
        image: placeholderImages.tshirts,
        description: 'Bold graphic design on a premium cotton blend'
      },
      {
        id: 3,
        name: 'V-Neck Slim Fit T-Shirt',
        category: 'tshirts',
        price: 2074,
        discountPrice: 1659,
        image: placeholderImages.tshirts,
        description: 'Modern v-neck with a slim fit design'
      },
      {
        id: 13,
        name: 'Premium Organic Cotton T-Shirt',
        category: 'tshirts',
        price: 3319,
        discountPrice: 2489,
        image: placeholderImages.tshirts,
        description: 'Eco-friendly organic cotton with a luxurious feel'
      },
      {
        id: 14,
        name: 'Vintage Wash Crew Neck',
        category: 'tshirts',
        price: 2738,
        discountPrice: 2074,
        image: placeholderImages.tshirts,
        description: 'Pre-washed for that perfect broken-in comfort'
      },
      {
        id: 15,
        name: 'Performance Athletic T-Shirt',
        category: 'tshirts',
        price: 2904,
        discountPrice: 2323,
        image: placeholderImages.tshirts,
        description: 'Moisture-wicking fabric perfect for workouts'
      },
      {
        id: 16,
        name: 'Striped Nautical T-Shirt',
        category: 'tshirts',
        price: 2489,
        discountPrice: 1991,
        image: placeholderImages.tshirts,
        description: 'Classic striped pattern with coastal inspiration'
      },
      {
        id: 17,
        name: 'Long Sleeve Henley T-Shirt',
        category: 'tshirts',
        price: 3568,
        discountPrice: 2904,
        image: placeholderImages.tshirts,
        description: 'Button placket detail with comfortable long sleeves'
      },
      {
        id: 18,
        name: 'Pocket Detail Cotton T-Shirt',
        category: 'tshirts',
        price: 2323,
        discountPrice: 1825,
        image: placeholderImages.tshirts,
        description: 'Classic design with a functional chest pocket'
      },
      {
        id: 19,
        name: 'Raglan Baseball T-Shirt',
        category: 'tshirts',
        price: 2904,
        discountPrice: 2240,
        image: placeholderImages.tshirts,
        description: 'Sporty raglan sleeves with contrasting colors'
      },
      {
        id: 20,
        name: 'Tie-Dye Festival T-Shirt',
        category: 'tshirts',
        price: 3070,
        discountPrice: 2489,
        image: placeholderImages.tshirts,
        description: 'Vibrant tie-dye pattern for a bold statement'
      },
      {
        id: 21,
        name: 'Heavyweight Cotton T-Shirt',
        category: 'tshirts',
        price: 2655,
        discountPrice: 2074,
        image: placeholderImages.tshirts,
        description: 'Durable heavyweight cotton for added warmth'
      },
      {
        id: 22,
        name: 'Slim Fit Bamboo T-Shirt',
        category: 'tshirts',
        price: 3734,
        discountPrice: 2904,
        image: placeholderImages.tshirts,
        description: 'Eco-friendly bamboo fabric with a sleek slim fit'
      },

      // Shirts
      {
        id: 4,
        name: 'Oxford Button-Down Shirt',
        category: 'shirts',
        price: 4149,
        discountPrice: 3319,
        image: placeholderImages.shirts,
        description: 'Classic oxford cloth button-down for a formal look'
      },
      {
        id: 5,
        name: 'Casual Flannel Shirt',
        category: 'shirts',
        price: 3734,
        discountPrice: 2489,
        image: placeholderImages.shirts,
        description: 'Soft flannel shirt for casual everyday wear'
      },
      {
        id: 6,
        name: 'Dress Shirt With French Cuffs',
        category: 'shirts',
        price: 4979,
        discountPrice: 4149,
        image: placeholderImages.shirts,
        description: 'Elegant formal shirt with french cuffs'
      },
      {
        id: 23,
        name: 'Chambray Work Shirt',
        category: 'shirts',
        price: 4564,
        discountPrice: 3734,
        image: placeholderImages.shirts,
        description: 'Durable chambray fabric with practical pockets'
      },
      {
        id: 24,
        name: 'Linen Summer Shirt',
        category: 'shirts',
        price: 4979,
        discountPrice: 3817,
        image: placeholderImages.shirts,
        description: 'Breathable linen perfect for warm weather'
      },
      {
        id: 25,
        name: 'Plaid Flannel Button-Up',
        category: 'shirts',
        price: 4149,
        discountPrice: 3319,
        image: placeholderImages.shirts,
        description: 'Classic plaid pattern in soft brushed flannel'
      },
      {
        id: 26,
        name: 'Denim Western Shirt',
        category: 'shirts',
        price: 5394,
        discountPrice: 4149,
        image: placeholderImages.shirts,
        description: 'Western-inspired details with pearl snap buttons'
      },
      {
        id: 27,
        name: 'Short Sleeve Hawaiian Shirt',
        category: 'shirts',
        price: 3734,
        discountPrice: 2904,
        image: placeholderImages.shirts,
        description: 'Tropical print perfect for vacations and casual wear'
      },
      {
        id: 28,
        name: 'Slim Fit Stretch Dress Shirt',
        category: 'shirts',
        price: 5394,
        discountPrice: 4564,
        image: placeholderImages.shirts,
        description: 'Modern slim cut with comfortable stretch fabric'
      },
      {
        id: 29,
        name: 'Textured Poplin Shirt',
        category: 'shirts',
        price: 4564,
        discountPrice: 3319,
        image: placeholderImages.shirts,
        description: 'Subtle texture adds interest to this versatile shirt'
      },
      {
        id: 30,
        name: 'Mandarin Collar Linen Shirt',
        category: 'shirts',
        price: 4979,
        discountPrice: 4149,
        image: placeholderImages.shirts,
        description: 'Contemporary mandarin collar in breathable linen'
      },
      {
        id: 31,
        name: 'Brushed Twill Overshirt',
        category: 'shirts',
        price: 5809,
        discountPrice: 4564,
        image: placeholderImages.shirts,
        description: 'Heavy-duty twill that works as a light jacket'
      },
      {
        id: 32,
        name: 'Military-Inspired Field Shirt',
        category: 'shirts',
        price: 5394,
        discountPrice: 4149,
        image: placeholderImages.shirts,
        description: 'Utility pockets and rugged details for a tactical look'
      },

      // Lowers (pants/bottoms)
      {
        id: 7,
        name: 'Classic Fit Chinos',
        category: 'lowers',
        price: 4564,
        discountPrice: 3319,
        image: placeholderImages.lowers,
        description: 'Versatile chinos for casual or business casual'
      },
      {
        id: 8,
        name: 'Athletic Joggers',
        category: 'lowers',
        price: 3734,
        discountPrice: 2904,
        image: placeholderImages.lowers,
        description: 'Comfortable joggers for active lifestyles'
      },
      {
        id: 9,
        name: 'Slim Fit Jeans',
        category: 'lowers',
        price: 5394,
        discountPrice: 4149,
        image: placeholderImages.lowers,
        description: 'Modern slim fit denim jeans'
      },
      {
        id: 33,
        name: 'Cargo Pants with Multiple Pockets',
        category: 'lowers',
        price: 4979,
        discountPrice: 3734,
        image: placeholderImages.lowers,
        description: 'Functional cargo pockets for practical storage'
      },
      {
        id: 34,
        name: 'Relaxed Fit Corduroy Pants',
        category: 'lowers',
        price: 4564,
        discountPrice: 3319,
        image: placeholderImages.lowers,
        description: 'Cozy corduroy texture with a comfortable relaxed fit'
      },
      {
        id: 35,
        name: 'Stretch Denim Straight Leg Jeans',
        category: 'lowers',
        price: 5394,
        discountPrice: 4149,
        image: placeholderImages.lowers,
        description: 'Classic straight leg with comfortable stretch'
      },
      {
        id: 36,
        name: 'Performance Golf Pants',
        category: 'lowers',
        price: 6639,
        discountPrice: 4979,
        image: placeholderImages.lowers,
        description: 'Technical fabric perfect for the golf course'
      },
      {
        id: 37,
        name: 'Linen Beach Pants',
        category: 'lowers',
        price: 4149,
        discountPrice: 3319,
        image: placeholderImages.lowers,
        description: 'Lightweight linen pants ideal for beach days'
      },
      {
        id: 38,
        name: 'Distressed Vintage Jeans',
        category: 'lowers',
        price: 5809,
        discountPrice: 4564,
        image: placeholderImages.lowers,
        description: 'Authentic distressed details for a lived-in look'
      },
      {
        id: 39,
        name: 'Twill Dress Pants',
        category: 'lowers',
        price: 6224,
        discountPrice: 4979,
        image: placeholderImages.lowers,
        description: 'Sharp tailored pants for formal occasions'
      },
      {
        id: 40,
        name: 'Technical Hiking Pants',
        category: 'lowers',
        price: 7054,
        discountPrice: 5809,
        image: placeholderImages.lowers,
        description: 'Water-resistant fabric with zippered pockets for trails'
      },
      {
        id: 41,
        name: 'Canvas Work Pants',
        category: 'lowers',
        price: 4979,
        discountPrice: 4149,
        image: placeholderImages.lowers,
        description: 'Durable canvas construction for hard-wearing use'
      },
      {
        id: 42,
        name: 'Pleated Wide-Leg Trousers',
        category: 'lowers',
        price: 5809,
        discountPrice: 4564,
        image: placeholderImages.lowers,
        description: 'Contemporary wide-leg style with pleated front'
      },

      // Shoes
      {
        id: 10,
        name: 'Classic Leather Sneakers',
        category: 'shoes',
        price: 7469,
        discountPrice: 5809,
        image: placeholderImages.shoes,
        description: 'Timeless leather sneakers for everyday wear'
      },
      {
        id: 11,
        name: 'Running Performance Shoes',
        category: 'shoes',
        price: 9959,
        discountPrice: 8299,
        image: placeholderImages.shoes,
        description: 'Lightweight performance shoes for runners'
      },
      {
        id: 12,
        name: 'Casual Slip-On Loafers',
        category: 'shoes',
        price: 6639,
        discountPrice: 4979,
        image: placeholderImages.shoes,
        description: 'Comfortable slip-on design for casual outings'
      },
      {
        id: 43,
        name: 'Desert Boots',
        category: 'shoes',
        price: 9959,
        discountPrice: 7469,
        image: placeholderImages.shoes,
        description: 'Classic suede desert boots with crepe sole'
      },
      {
        id: 44,
        name: 'Canvas Low-Top Sneakers',
        category: 'shoes',
        price: 4979,
        discountPrice: 3734,
        image: placeholderImages.shoes,
        description: 'Casual canvas construction for everyday wear'
      },
      {
        id: 45,
        name: 'Leather Oxford Dress Shoes',
        category: 'shoes',
        price: 12449,
        discountPrice: 9959,
        image: placeholderImages.shoes,
        description: 'Timeless oxford style for formal occasions'
      },
      {
        id: 46,
        name: 'Waterproof Hiking Boots',
        category: 'shoes',
        price: 11619,
        discountPrice: 9129,
        image: placeholderImages.shoes,
        description: 'Rugged waterproof boots with excellent traction'
      },
      {
        id: 47,
        name: 'Boat Shoes',
        category: 'shoes',
        price: 6639,
        discountPrice: 5394,
        image: placeholderImages.shoes,
        description: 'Nautical-inspired shoes with non-marking sole'
      },
      {
        id: 48,
        name: 'Chelsea Boots',
        category: 'shoes',
        price: 10789,
        discountPrice: 8299,
        image: placeholderImages.shoes,
        description: 'Sleek elastic-sided boots for versatile styling'
      },
      {
        id: 49,
        name: 'Athletic Cross-Training Shoes',
        category: 'shoes',
        price: 9129,
        discountPrice: 7469,
        image: placeholderImages.shoes,
        description: 'Versatile shoes for various workout activities'
      },
      {
        id: 50,
        name: 'Suede Moccasin Slippers',
        category: 'shoes',
        price: 5809,
        discountPrice: 4564,
        image: placeholderImages.shoes,
        description: 'Comfortable indoor slippers with plush lining'
      },
      {
        id: 51,
        name: 'Leather Penny Loafers',
        category: 'shoes',
        price: 10374,
        discountPrice: 8299,
        image: placeholderImages.shoes,
        description: 'Classic penny loafers in polished leather'
      },
      {
        id: 52,
        name: 'Espadrille Summer Shoes',
        category: 'shoes',
        price: 5394,
        discountPrice: 4149,
        image: placeholderImages.shoes,
        description: 'Lightweight jute-soled shoes perfect for summer'
      }
    ];

    localStorage.setItem('shopProducts', JSON.stringify(initProducts));
    setProducts(initProducts);

    const savedCart = localStorage.getItem('shopCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    setLoading(false);
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex(item => item.id === product.id);

    if (itemIndex > -1) {
      newCart[itemIndex].quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    setCart(newCart);
    localStorage.setItem('shopCart', JSON.stringify(newCart));
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
    localStorage.setItem('shopCart', JSON.stringify(newCart));
  };

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };

  const value = {
    products,
    cart,
    addToCart,
    removeFromCart,
    getProductsByCategory
  };

  return (
    <ProductContext.Provider value={value}>
      {!loading && children}
    </ProductContext.Provider>
  );
}
