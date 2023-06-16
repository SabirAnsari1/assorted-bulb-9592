import { Text, Image, useColorMode, Icon, Box, Flex, Button } from "@chakra-ui/react";
import { Places } from "../utils/types";
import { AiFillStar } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";

export const SinglePlace = ({
  id,
  img,
  city,
  country,
  type,
  desc,
  availability,
  price,
  review,
  rating,
  host,
  hostImg,
  yOh,
  hostTag,
}: Places) => {
  const { colorMode } = useColorMode();

  return (
    <Box borderRadius="5px" w={"50%"} margin={"auto"} pos={"relative"} mt={"5%"}>
      {/* first */}
      <Image src={img} alt={city} w={"100%"} maxH={"500px"} borderRadius="5px" />

      {/* second */}
      <Box pos={"absolute"} left={"87%"} top={"5%"}>
        <Icon aria-label="favorite" as={BsFillSuitHeartFill} color={"#f1095d"} />
      </Box>

      {/* third */}
      <Flex justify={"space-between"} mt={".3rem"}>
        <Text fontWeight={"semibold"} color={colorMode === "light" ? "black" : "white"}>
          {city}, {country}
        </Text>

        <Box>
          <Icon aria-label="rating" as={AiFillStar} color={"#567eb9"} /> {rating}
        </Box>
      </Flex>

      {/* forth */}
      <Text
        color={"#788097"}
        fontSize={{
          base: "1xl",
          sm: "1xl",
          md: "1xl",
          lg: "1xl",
          xl: "1xl",
          "2xl": "2xl",
        }}
      >
        {desc}
      </Text>

      {/* fifth */}
      <Text>{type && type.toUpperCase()}</Text>

      {/* sixth */}
      <Text color={availability === "available" ? "#567eb9" : "#f1095d"}>
        {availability === "available" ? "Available" : "Not Available"}
      </Text>

      {/* seventh */}
      <Text>₹ {price}</Text>

      {/* eight */}
      <Button w={"100%"} bgColor={"#f1095d"} mt={".3rem"} color={"white"}>
        Book Now
      </Button>
    </Box>
  );
};
