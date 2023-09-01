import refLogo from "../../assets/refLogo.svg";
import "./styles.scss";
export default function NavBar({ content }) {
  return (
    <div className="navbar-main">
      <div className="navbar-logo">
        <img src={refLogo} alt="logo" />
      </div>
      <div className="navbar-options">
        {content?.itens.map((x, index) => {
          return (
            <div key={index} className="navbar-itens">
              <label>{x?.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
