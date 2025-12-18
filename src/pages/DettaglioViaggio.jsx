import { useState } from "react";
import viaggi from "../data/viaggi";
import { Link, useParams, useNavigate } from "react-router-dom";
/* import { useSearch } from "../context/SearchContext"; */

export default function DettaglioViaggio() {
  const { id } = useParams();

  const filter = viaggi.filter((items) => items.id == id);

  function handleTrash(codiceFiscale) {
    const removeTraveler = trip[0].viaggiatori.filter(
      (viaggiatore) => viaggiatore.codiceFiscale !== codiceFiscale
    );

    setTrip([{ ...trip[0], viaggiatori: removeTraveler }]);
  }
  const [trip, setTrip] = useState(filter);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center p-3">
          <div className="col-lg-8 col-sm-12">
            <div className="d-flex justify-content-between mb-3">
              <h2 className="fs-3">Rubrica Viaggiatori</h2>
              <Link className="btn btn-primary">Aggiungi Viaggiatore</Link>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col" className="d-none d-md-table-cell">
                    Cognome
                  </th>
                  <th scope="col">Azioni</th>
                </tr>
              </thead>
              <tbody>
                {trip[0].viaggiatori.map((viaggiatore, i) => (
                  <tr key={viaggiatore.codiceFiscale}>
                    <td>{viaggiatore.nome}</td>
                    <td className="d-none d-md-table-cell">
                      {viaggiatore.cognome}
                    </td>
                    <td className="log">
                      <Link to="/PersonDetails/:id">
                        <button
                          type="button"
                          className="eye btn btn-outline-primary"
                        >
                          <i className="bi bi-eye-fill"></i>
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-danger mx-2"
                        onClick={() => handleTrash(viaggiatore.codiceFiscale)}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
