import { createPortal } from "react-dom";
import Toggle from "../../../components/Toggle";

export default function MobileDifficultyFilter({ difficulty, setDifficulty }) {
  return (
    <Toggle>
      {({ on: menuOpen, toggle, close }) => (
        <div className="relative z-10 lg:hidden">
          <button
            onClick={toggle}
            className={`flex justify-between bg-white items-center w-[200px] px-5 py-1.5 text-10 font-justme text-[32px] border-2 ${
              menuOpen ? "border-custom-dark-oragne" : "border-black"
            } rounded-xl`}
          >
            <span>{difficulty}</span>
            <img
              src={menuOpen ? "/arrow_up.svg" : "/arrow_down.svg"}
              alt="Arrow"
            />
          </button>

          {menuOpen && (
            <div className="absolute bg-white top-[70px] left-0 border-2 border-custom-dark-oragne rounded-lg overflow-hidden cursor-pointer">
              <div
                onClick={() => {
                  setDifficulty("Easy");
                  close();
                }}
                className="w-[200px] px-5 py-1.5 text-10 font-justme text-[32px] hover:bg-custom-light-green hover:text-custom-green"
              >
                Easy
              </div>
              <div
                onClick={() => {
                  setDifficulty("Medium");
                  close();
                }}
                className="w-[200px] px-5 py-1.5 text-10 font-justme text-[32px] hover:bg-custom-light-orange hover:text-custom-orange"
              >
                Medium
              </div>
              <div
                onClick={() => {
                  setDifficulty("Hard");
                  close();
                }}
                className="w-[200px] px-5 py-1.5 text-10 font-justme text-[32px] hover:bg-custom-light-red hover:text-custom-red"
              >
                Hard
              </div>
              {createPortal(
                <div
                  onClick={() => close()}
                  className="fixed top-0 w-full h-full"
                />,
                document.body
              )}
            </div>
          )}
        </div>
      )}
    </Toggle>
  );
}
