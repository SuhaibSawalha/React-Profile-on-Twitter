import "./Trends.css";
import Trend from "./Trend";
import VerticalDivider from "../VerticalDivider/index";

function Trends() {
  return (
    <div className="trends">
      <h3>Trends for you</h3>
      <Trend category="Programming" title="C++" tweetsCount="3.8M" />
      <VerticalDivider height="10px" />
      <Trend category="Sports" title="Kylian Mbappe" tweetsCount="118.2K" />
      <VerticalDivider height="10px" />
      <Trend category="Politcal" title="Hamas" tweetsCount="87.7K" />
    </div>
  );
}

export default Trends;
