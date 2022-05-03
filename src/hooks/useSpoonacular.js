import { useState, useEffect } from "react";

const useSpoonacularRecipies = ({
  params = [{ query: "addRecipieInformation", value: true }],
}) => {
  const [recipies, setRecipies] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&`;

  const paramsAsArray = params.map((el) => {
    const { query, value } = el;
    return query.concat(`=${value}&`);
  });

  const paramsAsString = paramsAsArray.join("");
  const newURL = `${baseUrl}${paramsAsString}`;

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(newURL, {
          method: "GET",
          headers: { "Content-Type": "Application/json" },
        });
        const data = await response.json();
        setRecipies(data);
        console.log("fetched!");
      } catch (error) {
        setError(error);
        console.error(`There was an error fetching from spoontacular`);
      }
    };
    fetchData();
  }, [newURL]);

  const data = { recipies, isLoading, error };

  return data;
};

export default useSpoonacularRecipies;
