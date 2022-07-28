import { useContext } from "react";
import { GlobalContext } from "../../store/context/GlobalContext";
import Display from "../Display/Display";
import "./Actions.css";

const Actions = (): JSX.Element => {
  const { isCalling, phoneNumber } = useContext(GlobalContext);

  return (
    <div className="actions">
      <Display />
      {isCalling && (
        <a
          href="/"
          className={`call${phoneNumber.length === 9 ? " active" : ""}`}
        >
          Call
        </a>
      )}
      {!isCalling && (
        <a href="/" className="hang active">
          Hang
        </a>
      )}
    </div>
  );
};

export default Actions;
