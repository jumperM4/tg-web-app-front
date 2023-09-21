import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useTelegram } from "./hooks/useTelegram";

import ProductList from "./components/productList/productList";
import Header from "./components/header/header";
import Form from "./components/form/form";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
