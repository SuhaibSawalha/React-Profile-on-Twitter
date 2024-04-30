import SearchTab from "./../SearchTab/index";
import Suggestions from "./../Suggestions/index";
import Trends from "./../Trends/index";
import VerticalDivider from "./../vertical-divider/index";

function Side() {
  return (
    <aside>
      <SearchTab />
      <VerticalDivider height="15px" />
      <Suggestions />
      <VerticalDivider height="15px" />
      <Trends />
    </aside>
  );
}
export default Side;
