import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      {selectedRecipe ? (
        <RecipePage item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </>
  );
};
