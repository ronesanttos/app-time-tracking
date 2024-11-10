import {  useState } from "react";
import "./App.css";
import CardMap from "./components/CardMap";
import CardPerfil from "./components/CardPerfil";
import data from "./data.json";
function App() {
  const [title, setTitle] = useState(
    data.map((title, index) => data[index].title)
  );

  const [current, setCurrent] = useState(
    data.map((timeframes, index) => data[index].timeframes.weekly.current)
  );
  const [previous, setPrevious] = useState(
    data.map((timeframes, index) => data[index].timeframes.weekly.previous)
  );
  const handleDaily = () => {
    setCurrent((current) =>
      data.map((timeframes, index) => data[index].timeframes.daily.current)
    );
    setPrevious((previous) =>
      data.map((timeframes, index) => data[index].timeframes.daily.previous)
    );
  };
  const handleWeekly = () => {
    setCurrent((current) =>
      data.map((timeframes, index) => data[index].timeframes.weekly.current)
    );
    setPrevious((previous) =>
      data.map((timeframes, index) => data[index].timeframes.weekly.previous)
    );
  };
  const handleMonthly = () => {
    setCurrent((current) =>
      data.map((timeframes, index) => data[index].timeframes.monthly.current)
    );
    setPrevious((previous) =>
      data.map((timeframes, index) => data[index].timeframes.monthly.previous)
    );
  };

  return (
    <div className="container-principal">
      <CardPerfil
        handleDaily={handleDaily}
        handleWeekly={handleWeekly}
        handleMonthly={handleMonthly}
      />
      <div className="card-principal">
        <CardMap
          title={title[0]}
          weeklyCurrent={current[0]}
          weeklyPrevious={previous[0]}
          color={"orange"}
          imgs={"/images/icon-work.svg"}
        />
        <CardMap
          title={title[1]}
          weeklyCurrent={current[1]}
          weeklyPrevious={previous[1]}
          color={"aqua"}
          imgs={"/images/icon-play.svg"}
        />
        <CardMap
          title={title[2]}
          weeklyCurrent={current[2]}
          weeklyPrevious={previous[2]}
          color={"red"}
          imgs={"/images/icon-study.svg"}
        />
        <CardMap
          title={title[3]}
          weeklyCurrent={current[3]}
          weeklyPrevious={previous[3]}
          color={"green"}
          imgs={"/images/icon-exercise.svg"}
        />
        <CardMap
          title={title[4]}
          weeklyCurrent={current[4]}
          weeklyPrevious={previous[4]}
          color={"violet"}
          imgs={"/images/icon-social.svg"}
        />
        <CardMap
          title={title[5]}
          weeklyCurrent={current[5]}
          weeklyPrevious={previous[5]}
          color={"yellow"}
          imgs={"/images/icon-self-care.svg"}
        />
      </div>
    </div>
  );
}

export default App;
