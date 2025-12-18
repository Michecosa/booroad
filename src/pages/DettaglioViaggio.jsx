import { useState, useEffect } from "react";
import viaggi from "../data/viaggi";
import { useSearch } from "../context/SearchContext";

export default function DettaglioViaggio() {
  const { search } = useSearch();

  let viaggiatori = [];

  viaggi.forEach((viaggio) => {
    viaggio.viaggiatori.forEach((viaggiatore) => {
      viaggiatori.push(viaggiatore);
    });
  });

  const filteredUsers = viaggiatori.filter((user) =>
    `${user.nome} ${user.cognome}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ul className="list-unstyled text-center py-3">
        {filteredUsers.map((traveler) => (
          <li key={traveler.id}>
            {traveler.nome} {traveler.cognome}
          </li>
        ))}
      </ul>
    </>
  );
}
