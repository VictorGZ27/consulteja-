import { useState } from "react";
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import "./styles/index.css";

function App() {
  const [categoria, setCategoria] = useState("todas");
  const [busca, setBusca] = useState("");

  return (
    <>
      <Header 
        OncategoriaClick={setCategoria}
        OnBuscar={setBusca}
      />
      
      <Main 
        categoriaSelecionada={categoria}
        termoBusca={busca}
      />

      <Footer />
    </>
  );
}

export default App;
