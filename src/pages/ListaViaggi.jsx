import viaggi from "../data/viaggi.js";

export default function ListaViaggi() {
  return (
    <>
      <div className="container">
        <h1>Lista Viaggi</h1>
        <ul>
          {viaggi.map((viaggio) => (
            <li key={viaggio.id}>
              <strong>{viaggio.destinazione}</strong>
              <br />
              {viaggio.dataInizio} &ndash; {viaggio.dataFine}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
