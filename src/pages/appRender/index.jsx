import Body from "../../components/body";
import CaroselComp from "../../components/carosel";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";

export default function AppRender({ data }) {
  const renderMethod = (type, itens, index) => {
    switch (type) {
      case "navbar":
        return <NavBar content={itens} key={index} />;
      case "body":
        return <Body content={itens} key={index} />;
      case "carousel":
        return <CaroselComp content={itens} key={index} />;
      case "footer":
        return <Footer content={itens} key={index} />;
      default:
        return console.error("Componente não encontrado");
    }
  };

  return (
    <div className="appRender-main">
      <div className="appRender-border" />
      <div className="appRender-content">
        {data?.content.map((x, index) => {
          return renderMethod(x?.type, x, x?.type + index);
        })}
      </div>
    </div>
  );
}
