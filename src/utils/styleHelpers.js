function getStyleByDifficulty(difficulty) {
  const normalizedDifficulty = difficulty?.toString().trim().toLowerCase();

  const styles = {
    easy: "border-custom-green bg-custom-light-green text-custom-green",
    medium: "border-custom-orange bg-custom-light-orange text-custom-orange",
    hard: "border-custom-red bg-custom-light-red text-custom-red",
  };

  return styles[normalizedDifficulty] || {};
}

export { getStyleByDifficulty };
