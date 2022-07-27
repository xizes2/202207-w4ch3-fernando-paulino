import { useContext } from "react";
import { GlobalContext } from "../../store/context/GlobalContext";

const Info = (): JSX.Element => {
  const { isCalling } = useContext(GlobalContext);

  return <span className={isCalling ? "message" : "off"}>Calling...</span>;
};

export default Info;
