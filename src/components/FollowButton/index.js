import Button from "./../Button/index";
import { useState } from "react";

function FollowButton() {
  const [following, setFollowing] = useState(false);

  const changeFollowing = () => {
    setFollowing(!following);
  };
  return (
    <Button
      text={following ? "Following" : "Follow"}
      color={following ? "white" : "black"}
      backgroundColor={following ? "black" : "white"}
      width={following ? "100px" : "80px"}
      height="35px"
      fontSize="0.8rem"
      borderColor={following ? "white" : "black"}
      onClick={changeFollowing}
    />
  );
}

export default FollowButton;
