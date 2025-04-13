import axios from "axios";

export const getRecipes = async ({ pageParam = 0 }) => {
  const response = await axios({
    method: "GET",
    url: `https://dummyjson.com/recipes?limit=6&skip=${pageParam}`,
  });
  return response;
};

export const getRecipeById = async ({ queryKey }) => {
  const [, id] = queryKey;
  const response = await axios({
    method: "GET",
    url: `https://dummyjson.com/recipes/${id}`,
  });
  return response;
};
