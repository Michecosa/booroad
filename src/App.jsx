import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import ListaViaggi from "./pages/ListaViaggi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/listaviaggi" element={<ListaViaggi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
