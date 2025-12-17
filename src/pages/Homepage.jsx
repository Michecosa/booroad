import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div
        className="p-5 text-center bg-image rounded-3 position-relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519885277449-12eee5564d68?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">BooRoad</h1>
              <h4 className="mb-5 fw-normal text-white">
                Destinazioni, date e dettagli delle tue prossime avventure
              </h4>
              <Link to={`/viaggi`}>
                <button className="btn btn-outline-light">Lista viaggi</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center mb-5">Perch&eacute; viaggiare con noi?</h2>
        <div className="row">
          <div className="col-md-3">Gruppi piccoli</div>
          <div className="col-md-3">Accompagnatori locali</div>
          <div className="col-md-3">Date flessibili</div>
          <div className="col-md-3">Esperienze autentiche</div>
        </div>
      </div>
      <div className="text-center my-5">
        <h2>Pronto a partire?</h2>
        <Link to="/viaggi">
          <button className="btn btn-dark mt-3">Scopri tutti i viaggi</button>
        </Link>
      </div>
    </>
  );
}
