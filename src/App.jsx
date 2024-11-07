import "./App.css";
import CardMap from "./components/CardMap";
import CardPerfil from "./components/CardPerfil";

function App() {
  return (
    <div className="container-principal">
      <CardPerfil />
      <div className="card-principal">
        <CardMap />
        <CardMap />
        <CardMap />
        <CardMap />
        <CardMap />
        <CardMap />
      </div>
    </div>
  );
}

export default App;
