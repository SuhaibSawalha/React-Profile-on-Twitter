import SearchTab from "./../SearchTab/index";
import Suggestions from "./../Suggestions/index";
import VerticalDivider from "./../vertical-divider/index";

function Side() {
  return (
    <aside>
      <SearchTab />
      <VerticalDivider height="15px" />
      <Suggestions />
    </aside>
  );
}
export default Side;
