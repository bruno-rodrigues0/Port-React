import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
          <Categories titulo="Análise de dados" />
          <Categories titulo="Cálculo" />
          <Categories titulo="Rede de computadores" />
          <Categories titulo="Lógica de Programação" />
          <Categories titulo="Banco de Dados" />
      </Container>
      <Footer />
    </>
  );
}

export default App;
