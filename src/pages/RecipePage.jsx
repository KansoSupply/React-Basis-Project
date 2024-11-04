import {
  Center,
  Image,
  Card,
  CardBody,
  Heading,
  Flex,
  VStack,
  Text,
  Wrap,
  Button,
  Tag,
} from "@chakra-ui/react";
import { useEffect } from "react";

export const RecipePage = ({ item, clickFn }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Center bgColor="white" h="fit" flexDirection="column">
        <Card
          borderRadius="xl"
          w={["100%", "100%", "75%", "50%"]}
          h="fit"
          padding="6"
        >
          <Button w="fit-content" onClick={() => clickFn()} mb={4}>
            Back to overview
          </Button>
          <CardBody p={0}>
            <Image
              h="md"
              w="100%"
              mb={8}
              src={item.image}
              borderRadius="xl"
              objectFit="cover"
            />
            <Flex
              gap={6}
              align="baseline"
              flexDirection={["column", "row", "row"]}
            >
              <VStack mt="6" spacing="10" align="left" width="50%">
                <VStack align="left">
                  <Heading size="lg">{item.label}</Heading>
                </VStack>
                <VStack align="left">
                  <Text>Mealtype: {item.mealType}</Text>
                  <Text>Total cooking time: {item.totalTime} minutes </Text>
                  <Text>Servings: {item.yield}</Text>
                </VStack>
                <VStack align="left">
                  <Heading size="md">Ingredients</Heading>
                  <>
                    {item.ingredients.map((ingredient, index) => (
                      <Text key={`${ingredient.text}-${index}`}>
                        {ingredient.text}
                      </Text>
                    ))}
                  </>
                </VStack>
              </VStack>
              <VStack align="Left" width="50%" spacing="10">
                <VStack align="left">
                  <Heading size="md">Health Labels</Heading>
                  <Wrap mt="6" spacing="3">
                    {item.healthLabels.map((healthLabel) => (
                      <Tag
                        fontSize="8px"
                        fontWeight="bold"
                        size="md"
                        width="fit-content"
                        textTransform="uppercase"
                        padding="2"
                        borderRadius="0"
                        background="lightgrey"
                        color="black"
                        key={healthLabel}
                      >
                        {healthLabel}
                      </Tag>
                    ))}
                  </Wrap>
                </VStack>
                {item.dietLabels.length > 0 && (
                  <VStack align="left">
                    <Heading size="md">Diet Labels</Heading>
                    <Wrap mt="6" spacing="3">
                      {item.dietLabels.map((dietLabel) => (
                        <Tag
                          fontSize="8px"
                          fontWeight="bold"
                          size="md"
                          width="fit-content"
                          textTransform="uppercase"
                          padding="2"
                          borderRadius="0"
                          background="lightgrey"
                          color="black"
                          key={dietLabel}
                        >
                          {dietLabel}
                        </Tag>
                      ))}
                    </Wrap>
                  </VStack>
                )}
                {item.cautions.length > 0 && (
                  <VStack align="left">
                    <Heading size="md">Cautions</Heading>
                    <Wrap mt="6" spacing="3">
                      {item.cautions.map((caution) => (
                        <Tag
                          fontSize="8px"
                          fontWeight="bold"
                          size="md"
                          width="fit-content"
                          textTransform="uppercase"
                          padding="2"
                          borderRadius="0"
                          background="lightgrey"
                          color="black"
                          key={caution}
                        >
                          {caution}
                        </Tag>
                      ))}
                    </Wrap>
                  </VStack>
                )}
                <VStack align="left">
                  <Heading size="md">Total Nutrients</Heading>
                  <VStack align="left" spacing="3">
                    <Text>
                      {Math.round(item.totalNutrients.ENERC_KCAL.quantity)}{" "}
                      calories
                    </Text>
                    <Text>
                      {Math.round(item.totalNutrients.CHOCDF.quantity)} g carbs
                    </Text>
                    <Text>
                      {Math.round(item.totalNutrients.PROCNT.quantity)} g
                      protein
                    </Text>
                    <Text>
                      {Math.round(item.totalNutrients.FAT.quantity)} g fat
                    </Text>
                    <Text>
                      {Math.round(item.totalNutrients.CHOLE.quantity)} mg
                      cholesterol
                    </Text>
                    <Text>
                      {Math.round(item.totalNutrients.NA.quantity)} mg sodium
                    </Text>
                  </VStack>
                </VStack>
              </VStack>
            </Flex>
          </CardBody>
        </Card>
      </Center>
    </>
  );
};
