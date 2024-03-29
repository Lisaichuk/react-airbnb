import Heading from "../heading";
import "./index.css";

export default function Contact({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact__block">
        <img src={image} alt="photo" className="contact__image" />

        <div className="contact__info">
          <Heading>Господар - {name}</Heading>
          <div className="contact__sub-info">
            <span className="contact__sub-value">{phone}</span>
            <span className="contact__sub-value">{response_time}</span>
            <span className="contact__sub-value">
              {response_rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>

      <p className="contact__info">{info}</p>
    </div>
  );
}
