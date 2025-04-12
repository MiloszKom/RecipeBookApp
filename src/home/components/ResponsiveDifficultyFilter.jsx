import React from "react";
import MobileDifficultyFilter from "./filters/MobileDifficultyFilter";
import DesktopDifficultyFilter from "./filters/DesktopDifficultyFilter";

export default function ResponsiveDifficultyFilter({
  difficulty,
  setDifficulty,
}) {
  return (
    <>
      <MobileDifficultyFilter
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <DesktopDifficultyFilter
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
    </>
  );
}
