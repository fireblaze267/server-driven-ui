import { useEffect, useState } from "react";
import "./App.scss";
import examples from "./api/example_1.json";
import examples_2 from "./api/example_2.json";
import examples_3 from "./api/example_3.json";
import nextIcon from "./assets/next_icon.svg";
import ServerIcon from "./assets/refLogo.svg";
import AppRender from "./pages/appRender";
import LoadingPage from "./pages/loadingPage";
import RawData from "./pages/rawData";

function App() {
  const apiResponse = {
    0: examples,
    1: examples_2,
    2: examples_3,
  };

  const [api, setApi] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [phone, setPhone] = useState(window.innerWidth <= 750 ? true : false);

  useEffect(() => {
    setTimeout(() => {
      setRefresh(false);
    }, 300);
  }, [api]);

  function handleApi() {
    setRefresh(true);
    if (api >= 2) {
      setApi(0);
    } else {
      setApi(api + 1);
    }
  }

  return (
    <div className="app-main">
      <div className="app-phone">
        <button onClick={() => setPhone(!phone)}>
          <img src={ServerIcon} />
        </button>
        <button onClick={handleApi}>
          <img src={nextIcon} />
        </button>
      </div>
      <div className="app-render">
        {refresh ? <LoadingPage /> : <AppRender data={apiResponse[api]} />}
      </div>

      <div style={phone ? { display: "none" } : null} className="app-data">
        <RawData setApi={handleApi} num={api + 1} data={apiResponse[api]} />
      </div>
    </div>
  );
}

export default App;
