// --- Import des packages ---
import React, { useState, useEffect } from "react";
import axios from "axios";
// --- Import du CSS ---
import "./App.css";
// --- Import des components ---
import Header from "./components/Header";
import Top from "./components/Top";
import Section from "./components/Section";

function App() {
  const [top, setTop] = useState([]);
  const [section, setSection] = useState([]);
  const [product, setProduct] = useState([]);
  const [tip, setTip] = useState(1.0);

  const tipAdd = () => {
    setTip(tip + 0.5);
  };

  const tipDecrease = () => {
    setTip(tip - 0.5);
  };

  const quantityAdd = item => {
    console.log("quantityAdd");
    console.log(item);
    const newProduct = [...product];

    let isFound = false;

    for (let i = 0; i < newProduct.length; i++) {
      if (newProduct[i].id === item.id) {
        newProduct[i].quantity = newProduct[i].quantity + 1;
        isFound = true;
        break;
      }
    }

    if (isFound === false) {
      item.quantity = 1;
      newProduct.push(item);
    }

    setProduct(newProduct);
  };

  const quantityDecrease = item => {
    console.log("quantityDecrease");
    console.log(item);
    const newProduct = [...product];

    for (let i = 0; i < newProduct.length; i++) {
      if (newProduct[i].id === item.id) {
        newProduct[i].quantity = newProduct[i].quantity - 1;
        if (newProduct[i].quantity === 0) {
          newProduct.splice(i, 1);
        }
        break;
      }
    }

    setProduct(newProduct);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://deliveroo-api.now.sh/menu");
      setTop(response.data.restaurant);
      setSection(response.data.menu);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Top name={top.name} description={top.description} photo={top.picture} />
      <Section
        section={section}
        product={product}
        quantityDecrease={quantityDecrease}
        quantityAdd={quantityAdd}
        tip={tip}
        tipDecrease={tipDecrease}
        tipAdd={tipAdd}
      />
    </>
  );
}

export default App;
