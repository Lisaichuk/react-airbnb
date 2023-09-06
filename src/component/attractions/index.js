import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import { Fragment } from "react";

export default function Attractions({ list }) {
  return (
    <Box className="attractions" shadow>
      <Heading border>Пам'ятки поблизу</Heading>

      {list.map(({ id, ...rest }) => (
        <Fragment key={id}>
          <Item {...rest} />
        </Fragment>
      ))}
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ListItem>
      <a href={link} className="attractions__item">
        {name}
      </a>
    </ListItem>
  );
}
