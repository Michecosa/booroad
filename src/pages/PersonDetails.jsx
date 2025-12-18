import { useParams } from "react-router-dom";
import user from "../assets/user.jpg";
import viaggi from "../data/viaggi";

export default function PersonDetail() {
  const { id, travelerID } = useParams();

  const filterTrip = viaggi.filter((items) => items.id == id);

  const filterUser = filterTrip[0].viaggiatori.find(
    (items) => items.id == travelerID
  );

  const traveler = filterUser;

  //console.log(filterUser);

  return (
    <>
      <div className="card">
        <div className="card-top">
          <img src={user}></img> {/*IMMAGE DELLA PERSONA*/}
        </div>
        <div className="card-bottom">
          <p className="name">
            {traveler.nome} {traveler.cognome}
          </p>{" "}
          {/*TENDENZIALMENTE QUESTO DA FARE IN STRONG*/}
          <p>
            <strong>Codice fiscale:</strong>
            {traveler.codiceFiscale}
          </p>
          <p>
            <strong>Email:</strong> {traveler.email}
          </p>
          <p>
            <strong>Numero di telefono:</strong>+39 {traveler.telefono}
          </p>
        </div>
      </div>
    </>
  );
}
