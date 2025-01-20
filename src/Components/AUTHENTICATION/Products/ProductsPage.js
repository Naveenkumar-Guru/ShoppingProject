import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";

const ProductImage = ({ src, alt, onAddToCart, Amount, Fashion }) => {
  ////s-1
  return (
    <div className="product-card">
      <img src={src} alt={alt} className="Selling-Product" />
      <div className="product-container">
        <p>
          <span className="product-Fashion-name-Amount">{Fashion}</span>
          <span className="product-Fashion-Amount">{Amount} </span>
        </p>
      </div>

      <button className="products-onAddToCart" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

const productData = [
  {
    src: "https://i.ibb.co/g3Kz2kM/5b2a418c32b5.jpg",
    alt: "Women's clothings",
    Amount: "RS:-699-/",
    Fashion: "Women's clothings ",
  },
  {
    src: "https://i.ibb.co/wdNmyLb/2a8d1559cb66.jpg",
    alt: "Selling Product 4",
    Amount: "RS:-1599-/",
    Fashion: "Women's clothings ",
  },

  {
    src: "https://i.ibb.co/CKZ3pbh/a5a2aa3a33b3.jpg",
    alt: "Selling Product 10",
    Amount: " RS:-999-/",
    Fashion: "Women's clothings ",
  },

  {
    src: "https://i.imgur.com/k5Ms1Qn.jpeg.jpg",
    alt: "Women's clothings 7",
    Amount: "RS:-459-/",
    Fashion: "Women's clothings ",
  },

  {
    src: "https://demo.templatesjungle.com/ultras/images/selling-products6.jpg",
    alt: "Selling Product 6",
    Amount: "RS:-1999-/",
    Fashion: "Women's clothings ",
  },
  {
    src: "https://i.ibb.co/PFMRVkQ/72b14032e4be.jpg",
    alt: "Selling Product 1",
    Amount: "RS:-399-/",
    Fashion: "Women's clothings ",
  },

  {
    src: "https://i.ibb.co/nDs0Qnt/8886dfe355b5.jpg",
    alt: "A sample product display",
    Amount: "RS:-1200-/",
    Fashion: "Women's clothings ",
  },
  {
    src: " https://i.ibb.co/xL0DTRZ/ce48eb245ef5.jpg",
    alt: "Selling Product 1",
    Amount: "RS:-1000-/",
    Fashion: "Women's clothings ",
  },
  {
    src: "https://i.ibb.co/VBPS9nh/27cc4db6066f.jpg",
    alt: "Selling Product 1",
    Amount: "RS:-1699-/",
    Fashion: "Women's clothings ",
  },
  {
    src: "https://i.ibb.co/qjrMmLH/6a78ddc63f57.jpg",
    alt: "Selling Product 6",
    Amount: "RS:-1200-/",
    Fashion: "Women's clothings ",
  },

  {
    src: "https://demo.templatesjungle.com/ultras/images/selling-products5.jpg",
    alt: "Selling Product 1",
    Amount: "RS:-990-/",
    Fashion: "Men's clothings",
  },
  {
    src: "https://i.ibb.co/tYpGKbr/1f643b9dad0d.jpg",
    alt: "Selling Product 2",
    Amount: "RS:-490-/",
    Fashion: "Men's clothings",
  },
  {
    src: "https://demo.templatesjungle.com/ultras/images/product-item3.jpg",
    alt: "Product Item 3",
    Amount: "RS:-1600-/",
    Fashion: "Men's clothings",
  },

  {
    src: "https://i.ibb.co/TqBmGMM/402207a0c857.jpg",
    alt: "Selling Product 4",
    Amount: "RS:-1399-/",
    Fashion: "Men's clothings",
  },
  {
    src: "https://i.ibb.co/DGSRkmP/ae8550c0fe0b.jpg",
    alt: "Selling Product 5",
    Amount: "RS:-900-/",
    Fashion: "Men's clothings",
  },

  {
    src: "https://i.ibb.co/J2MZn0z/eb3b7d1c6395.jpg",
    alt: "Selling Product 6",
    Amount: "RS:-1400-/",
    Fashion: "Men's clothings",
  },

  {
    src: "https://demo.templatesjungle.com/ultras/images/selling-products2.jpg",
    alt: "Selling Product 7",
    Amount: "RS:-1890-/",
    Fashion: "Men's clothings",
  },
  {
    src: "https://i.ibb.co/xJYSgHh/9dbe0a26a508.jpg",
    alt: "Selling Product 8",
    Amount: "RS:-1000-/",
    Fashion: "Men's clothings",
  },
  {
    src: "https://i.ibb.co/9qDfD8w/59d22d5c1963.jpg",
    alt: "Selling Product 8",
    Amount: "RS:-490",
    Fashion: "Men's clothings",
  },

  {
    src: "https://i.ibb.co/ckyS82B/9693f2ee6f56.jpg",
    alt: "Selling Product 9",
    Amount: "RS:-800",
    Fashion: "Men's clothings",
  },
];

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const goToCart = () => {
    //s-3
    navigate("/cart");
  };

  return (
    <div className="products-bg-container">
      <div className="sub-bg"></div>
      <div className="product-grid">
        {productData.map((product, index) => (
          <ProductImage
            key={index}
            src={product.src}
            alt={product.alt}
            Fashion={product.Fashion}
            Amount={product.Amount}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      <div>
        <p>Items in Cart: {cart.length}</p>
        <button className="product-goToCart-button" onClick={goToCart}>
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
