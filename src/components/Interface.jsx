import {} from "react";
import { useCharacterAnimations } from "../contexts/ChracterAnimation";

function Interface() {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  return (
    <div className="container">
      <ul>
        {animations.map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  setAnimationIndex(index);
                }}
                className={`btn ${index == animationIndex ? "active" : ""}`}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Interface;
