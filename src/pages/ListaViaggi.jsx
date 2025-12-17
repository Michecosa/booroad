import viaggi from "../data/viaggi.js";

export default function ListaViaggi() {
  return (
    <>
      <div className="container">
        <h1 className="my-3">Lista Viaggi</h1>
        <div className="row">
          {viaggi.map((viaggio) => (
            <div key={viaggio.id} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{viaggio.destinazione}</h5>

                  <p className="card-text">
                    Dal: <strong>{viaggio.dataInizio}</strong> <br />
                    al <strong>{viaggio.dataFine}</strong>
                  </p>

                  <a href="#" className="btn btn-dark">
                    Dettagli viaggio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
