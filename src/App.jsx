import { Canvas } from "@react-three/fiber";
import Experince from "./components/Experince";
import "./App.css";
import Interface from "./components/Interface";

function App() {
  return (
    <>
      <div style={{ /* border: "5px solid pink",*/ height: "100vh" }}>
        <Canvas
          camera={{ position: [1, 1.5, 2.5], fov: 50 }}
          style={{
            // border: "1px solid red",
            width: "100%",
            height: "100%",
            // background: "gray",
          }}
          shadows
        >
          <Experince />
        </Canvas>
      </div>
      <Interface />
    </>
  );
}

export default App;
