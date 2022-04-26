import { useState, useEffect } from "react";

const useSpoonacularRecipies =  ({
  params = [{ query: "addRecipieInformation", value: true }],
}) => {
  const [recipies, setRecipies] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&`;

  // BUILD URL FROM PARAMS
  const paramsAsString = params.map((el) => {
    const { query, value } = el;
    return query.concat(`=${value}&`);

  });

  const newURL = `${baseUrl}${paramsAsString}`;
  console.log(newURL)

  // FETCH FROM API USING THE API KEY USING ASYNC
  useEffect(() => {
      setIsLoading(true)
      const fetchData = async () => {
        try {
            const response = await fetch(newURL, {
              method: "GET",
              headers: {"Content-Type":"Application/json"}
            });
            const data = await response.json();
            setRecipies(data);
            console.log("fetched!")
          } catch (error) {
            console.log(error);
            console.log(`There was an error fetching from spoontacular`);
          }
      }
      fetchData();

  }, [newURL])
  

  // BUILD THE DATA OBJECT IN THE FORM THAT WE WILL NEED IT
//   const recipieData = recipies.map((el) => {
//     const {
//       vegetarian,
//       vegan,
//       glutenFree,
//       image,
//       title,
//       id,
//       sourceUrl,
//       summary,
//       cuisines,
//       analyzedInstructions,
//     } = el;

//     return {
//       id,
//       image,
//       title,
//       sourceUrl,
//       summary,
//       cuisines,
//       tags: {
//         vegetarian,
//         vegan,
//         glutenFree,
//       },
//       analyzedInstructions,
//     };
//   });

  const data = { recipieData: [], isLoading, error }

   return data;
};

export default useSpoonacularRecipies;
