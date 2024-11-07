
import { createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detalhamento from "./pages/Detalhamento";
import dados_detalhamentos from "./data/dados-detalhamento.json";
import dados_banner from "./data/dados-banner.json";
import ScrollToTop from "./components/Scroll-to-top/Scroll-to-top";

function getDataFromId(id) {
  const banner = dados_banner.find(el => el.id === id);
  const detalhes = dados_detalhamentos.find(el => el.id === id);

  return {
    banner,
    detalhes
  }
}

const router = createHashRouter([
  {
    path: "/",
    element: (
        <>
        <ScrollToTop /> 
        <Home />
        </>
    ),
  },
  {
    path: "projects/:id",
    element: (
          <>
          <ScrollToTop/>
          <Detalhamento />
          </>
    ),
    loader: ({ params }) => {
      return getDataFromId(params.id);
    }
  }
])

export default router;