import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import ListaViaggi from "./pages/ListaViaggi";
import DettaglioViaggio from "./pages/DettaglioViaggio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* <Route index element={<Homepage />} /> */}
          <Route /* path="/viaggi"  */ index element={<ListaViaggi />} />
          <Route path="/:id" element={<DettaglioViaggio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
