import "./index.css";
import Assets from "./Assets";

function App() {
  return (
    <>
      <img
        className="main-image"
        src={"./src/assets/sprites/spr_background4.png"}
        style={{ margin: "0px -200px" }}
      />
      <Assets />
    </>
  );
}

export default App;
