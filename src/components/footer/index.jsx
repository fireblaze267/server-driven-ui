import fcLogo from "../../assets/fc_logo.png";
import instLogo from "../../assets/inst_logo.png";
import xLogo from "../../assets/x_logo.png";
import "./styles.scss";

export default function Footer({ content }) {
  const mapSocial = {
    x: xLogo,
    inst: instLogo,
    fc: fcLogo,
  };

  return (
    <div className="footer-main">
      <div className="footer-social">
        {content?.social.map((x, index) => {
          return <img key={index} src={mapSocial[x.logo]} />;
        })}
      </div>
      <div className="footer-links">
        {content?.itens.map((x, index) => {
          return <label key={index}>{x?.label}</label>;
        })}
      </div>
    </div>
  );
}
