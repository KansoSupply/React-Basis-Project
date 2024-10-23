import {
  Card,
  Image,
  Heading,
  Text,
  CardBody,
  HStack,
  VStack,
  Wrap,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

export const RecipeItem = ({ item, clickFn }) => {
  return (
    <Card
      w="sm"
      h="35rem"
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
    >
      <CardBody>
        <VStack spacing="16px" align="left">
          <Image
            filter="grayscale(0%)"
            w="full"
            h="250px"
            objectFit="cover"
            borderRadius="lg"
            src={item.image}
          />
          <HStack gap="2px">
            <Text textTransform="uppercase" fontSize="8px">
              {item.mealType}
            </Text>
            <Text>•</Text>
            <Text textTransform="uppercase" fontSize="8px">
              {item.dishType}{" "}
            </Text>
          </HStack>
          <Heading
            textAlign="left"
            lineHeight="6"
            size="md"
            w="fit"
            color={"orange"}
          >
            {item.label}
          </Heading>
          <HStack>
            {item.healthLabels.includes("Vegan") && (
              <Tag
                fontSize="8px"
                fontWeight="medium"
                size="md"
                width="fit-content"
                textTransform="uppercase"
                padding="2"
                borderRadius="0"
                background="lightgrey"
                color="black"
              >
                <TagLabel>Vegan</TagLabel>
              </Tag>
            )}
            {item.healthLabels.includes("Vegetarian") && (
              <Tag
                fontSize="8px"
                fontWeight="medium"
                size="md"
                width="fit-content"
                textTransform="uppercase"
                padding="2"
                borderRadius="0"
                background="lightgrey"
                color="black"
              >
                <TagLabel>Vegetarian</TagLabel>
              </Tag>
            )}
          </HStack>
          <VStack align="Left">
            <Text textTransform="uppercase" fontSize="8px">
              Cautions
            </Text>
            <Wrap>
              {item.cautions.map((caution) => (
                <Tag
                  fontSize="8px"
                  fontWeight="medium"
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
          <VStack align="Left">
            <Text textTransform="uppercase" fontSize="8px">
              Diet Labels
            </Text>
            <Wrap>
              {item.dietLabels.map((diet) => (
                <Tag
                  fontSize="8px"
                  fontWeight="medium"
                  size="md"
                  width="fit-content"
                  textTransform="uppercase"
                  padding="2"
                  borderRadius="0"
                  background="lightgrey"
                  color="black"
                  key={diet}
                >
                  {diet}
                </Tag>
              ))}
            </Wrap>
          </VStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
