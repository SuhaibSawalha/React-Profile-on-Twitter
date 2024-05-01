import "./Main.css";
import Header from "./Header";
import Profile from "./Profile";

function Main() {
  return (
    <main>
      <div className="main-component">
        <Header accountName="React" tweetsCount="2,664" verified={true} />
        <Profile
          name="React"
          id="reactjs"
          profileExtention="png"
          coverExtention="jpeg"
          verified={true}
          descreption="The library for web and native user interfaces"
          webRef="react.dev"
          followersCount="757.3K"
          followingCount="267"
        />
      </div>
    </main>
  );
}

export default Main;
