import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import shuttle from "./shuttle.svg";
import concierge from "./concierge.svg";
import service from "./service.svg";
import child from "./child.svg";

export default function PropertyDetails({
  title,
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box className="amenities" shadow>
      <Heading border>{title}</Heading>

      {hasPool && <ListItem imageSrc={pool}>Басейн</ListItem>}
      {hasGym && <ListItem imageSrc={gym}>Спортивний зал</ListItem>}
      {hasFreeBreakfast && (
        <ListItem imageSrc={breakfast}>Безкоштовний сніданок</ListItem>
      )}
      {hasFreeWiFi && <ListItem imageSrc={wifi}>Безкоштовний Wi-Fi</ListItem>}
      {hasParking && (
        <ListItem imageSrc={parking}>Безкоштовний вуличний паркінг</ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={pets}>
          Дозволено розміщення з домашніми тваринами
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={shuttle}>Трансфер до/з аеропорту</ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={concierge}>Консьєрж-сервіс</ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc={service}>Обслуговування номерів</ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={child}>Підходить для дітей</ListItem>
      )}
    </Box>
  );
}
