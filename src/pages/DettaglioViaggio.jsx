import { useState, useEffect } from "react";
import viaggi from "../data/viaggi";
import { useSearch } from "../context/SearchContext";

export default function DettaglioViaggio() {
  const { search } = useSearch();

  const [loading, setLoading] = useState(true);

  // variable
  let viaggiatori = [];

  viaggi.forEach((viaggio) => {
    viaggio.viaggiatori.forEach((viaggiatore) => {
      viaggiatori.push(viaggiatore);
    });
  });

  // filter users
  const filteredUsers = viaggiatori.filter((user) =>
    `${user.nome} ${user.cognome}`.toLowerCase().includes(search.toLowerCase())
  );

  // simulo quello che facevi prima col loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [search]);

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
