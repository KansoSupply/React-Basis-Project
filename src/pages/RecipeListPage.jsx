import { Center, Heading, Wrap, Text } from "@chakra-ui/react";
import { RecipeItems } from "../utils/data";
import { RecipeItem } from "../components/RecipeItem";
import { Search } from "../components/Search";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = RecipeItems.hits.filter((item) => {
    return item.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <Center h="fit" flexDir="column" gap="1rem" padding="4rem 1rem">
      <Heading>Delicious Recipes</Heading>
      <Search changeFn={handleChange} />
      {matchedRecipes.length === 0 ? (
        <Text>Sorry, we did not find any recipes.</Text>
      ) : (
        <Wrap justify="center" spacing="16px">
          {matchedRecipes.map((item) => (
            <RecipeItem
              clickFn={clickFn}
              item={item.recipe}
              key={item.recipe.label}
            />
          ))}
        </Wrap>
      )}
    </Center>
  );
};
