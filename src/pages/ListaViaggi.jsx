import viaggi from "../data/viaggi.js";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

export default function ListaViaggi() {
  const { search } = useSearch();
  const viaggiFiltrati = viaggi.filter((viaggio) =>
    viaggio.destinazione.toLowerCase().includes(search.toLowerCase())
  );

  function getStatoViaggio(dataInizio, dataFine) {
    const oggi = new Date();
    const inizio = new Date(dataInizio);
    const fine = new Date(dataFine);

    if (oggi < inizio) return "futuro";
    if (oggi > fine) return "passato";
    return "in-corso";
  }
  return (
    <>
      <div className="container">
        <h1 className="mt-3 text-center fw-bold">Lista Viaggi</h1>
        <p className="text-center text-muted mb-4">
          Destinazioni, date e dettagli
        </p>
        <div className="row">
          {viaggiFiltrati.map((viaggio) => (
            <div key={viaggio.id} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm viaggio-card position-relative">
                <span
                  className={`pallino-stato pallino-${getStatoViaggio(
                    viaggio.dataInizio,
                    viaggio.dataFine
                  )}`}
                ></span>
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
