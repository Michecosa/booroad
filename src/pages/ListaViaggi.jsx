import viaggi from "../data/viaggi.js";
import { Link } from "react-router-dom";

export default function ListaViaggi() {
  return (
    <>
      <div className="container">
        <h1 className="mt-3 text-center fw-bold">Lista Viaggi</h1>
        <p className="text-center text-muted mb-4">
          Destinazioni, date e dettagli
        </p>
        <div className="row">
          {viaggi.map((viaggio) => (
            <div key={viaggio.id} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm viaggio-card">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{viaggio.destinazione}</h5>

                  <p className="card-text text-muted small">
                    Data partenza:
                    <strong>
                      {new Date(viaggio.dataInizio).toLocaleDateString(
                        "it-IT",
                        { day: "2-digit", month: "short", year: "numeric" }
                      )}
                    </strong>
                    <br />
                    Data arrivo:
                    <strong>
                      {new Date(viaggio.dataFine).toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </strong>
                  </p>

                  <Link
                    to={`/${viaggio.id}`}
                    className="btn btn-outline-primary mt-auto"
                  >
                    Dettagli viaggio
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
