import { useState, useEffect } from "react";

const useSpoonacularRecipies = (params) => {
  const [recipies, setRecipies] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&`;

  // BUILD URL FROM PARAMS
  const paramsAsArray = params.map((el) => {
    const { query, value } = el;
    return query.concat(`=${value}&`);
  });

  const paramsAsString = paramsAsArray.join("");
  const newURL = `${baseUrl}${paramsAsString}`;

  // FETCH FROM API USING THE API KEY USING ASYNC
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(newURL, {
          method: "GET",
          headers: { "Content-Type": "Application/json" },
        });

        const data = await response.json();

        const recipiesData = data.results.map((el) => {
          const { vegetarian, vegan, summary, title, image } = el;
          return { vegetarian, vegan, summary, title, image };
        });

        setRecipies(recipiesData);
      } catch (error) {
        setError(error);
        console.log(`There was an error fetching from spoontacular`);
      }
    };

    fetchData();
  }, [newURL]);

  const data = { recipies, isLoading, error };
  return data;
};

export default useSpoonacularRecipies;
