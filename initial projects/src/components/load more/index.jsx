import React, { useState, useEffect } from "react";
import "./styles.css";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [url] = useState("https://dummyjson.com/products");
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(`${url}?limit=20&skip=${count * 20}`);
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => {
          const newProducts = data.products.filter(
            (p) => !prevData.some((prev) => prev.id === p.id)
          );
          return [...prevData, ...newProducts];
        });

        // Disable button if no more products available
        if (products.length + data.products.length >= data.total) {
          setDisableButton(true);
        }
      }

      setLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading && products.length === 0) {
    return <div className="loading">Loading Initial Products...</div>;
  }

  if (errorMsg) {
    return <div className="error">{errorMsg}</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button
          disabled={disableButton || loading}
          onClick={() => setCount(count + 1)}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
        {disableButton && <p>All Products Loaded</p>}
      </div>
    </div>
  );
}

export default LoadMore;
