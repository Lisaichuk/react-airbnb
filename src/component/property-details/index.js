import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bath from "./bath.svg";

export default function PropertyDetails({
  title,
  guests,
  bedrooms,
  beds,
  baths,
}) {
  return (
    <Box className="property__details" shadow>
      <Heading border>{title}</Heading>
      <ListItem imageSrc={guest}>{guests} гостей</ListItem>
      <ListItem imageSrc={bedroom}>{bedrooms} спальня</ListItem>
      <ListItem imageSrc={bed}>{beds} ліжко</ListItem>
      <ListItem imageSrc={bath}>{baths} ванна кімната</ListItem>
    </Box>
  );
}
