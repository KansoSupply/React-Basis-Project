import { Input } from "@chakra-ui/react";

export const Search = ({ changeFn }) => {
  return (
    <Input
      w="300px"
      focusBorderColor="black"
      borderRadius="0px"
      onChange={changeFn}
    ></Input>
  );
};
