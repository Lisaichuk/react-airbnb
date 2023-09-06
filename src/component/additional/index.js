import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Additional({
  rules,
  policy,
  transportation,
  lang,
  offer,
  instructions,
}) {
  return (
    <Box className="additional" shadow>
      <Heading border>Додаткові властивості</Heading>
      <ListItem title="Правила дому" children={rules} />
      <ListItem title="Політика скасування" children={policy} />
      <ListItem title="Місцевий транспорт" children={transportation} />
      <ListItem title="Мови хоста" children={lang.join(", ")} />
      <ListItem title="Спеціальні пропозиції" children={offer} />
      <ListItem title="Інструкціх щодо реєстрації" children={instructions} />
    </Box>
  );
}
