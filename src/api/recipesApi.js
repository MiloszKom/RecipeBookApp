import axios from "axios";

export const getRecipes = async ({ pageParam = 0, queryKey }) => {
  const [_key, { searchTerm }] = queryKey;

  const URL = searchTerm
    ? `https://dummyjson.com/recipes/search?q=${searchTerm}&limit=6&skip=${pageParam}`
    : `https://dummyjson.com/recipes?limit=6&skip=${pageParam}`;

  const response = await axios({
    method: "GET",
    url: URL,
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
