import Display from "../Display/Display";
import "./Actions.css";

const Actions = (): JSX.Element => {
  return (
    <div className="actions">
      <Display />
      <a href="/" className="call">
        Call
      </a>
      <a href="/" className="hang active">
        Hang
      </a>
    </div>
  );
};

export default Actions;
