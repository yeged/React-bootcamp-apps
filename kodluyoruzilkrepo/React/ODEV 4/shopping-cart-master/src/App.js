import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

const App = () => {

  const [cart,setCart] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 }])

  const [itemCount, setItemCount] = useState(0)


  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    const cartArray = [...cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cartArray.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cartArray[index] = { ...cart[index] };
    cartArray[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const itemCount = getItemCount(cartArray);
    // state'i güncelle
    setCart(cartArray);
    setItemCount(itemCount);
  };

  const handleDecrement = (product) => {
    const cartArray= [...cart];
    const index = cartArray.indexOf(product);
    cartArray[index] = { ...cartArray[index] };
    cartArray[index].value--;
    const itemCount = getItemCount(cartArray);
    setCart(cartArray);
    setItemCount(itemCount);
  };

  const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };

    return (
      <div className="App">
        <Navbar totalItems={itemCount} />
        <ProductsGrid
          products={products}
          cart={cart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    );
  
}

export default App;
