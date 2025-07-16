import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/utils/Layout/Layout.jsx";
import BuyNow from "./pages/BuyNow.jsx";
import Dynamic from "./pages/solutions/Dynamic.jsx";
import Isp from "./pages/solutions/Isp.jsx";
import DataParsing from "./pages/solutions/DataParsing.jsx";
import Ecommerce from "./pages/solutions/Ecommerce.jsx";
import Crypto from "./pages/solutions/Crypto.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="buy" index element={<BuyNow />} />
                    <Route path="/solutions/dynamic" element={<Dynamic />} />
                    <Route path="/solutions/isp" element={<Isp />} />
                    <Route path="/solutions/data-parsing" element={<DataParsing />} />
                    <Route path="/solutions/ecommerce" element={<Ecommerce />} />
                    <Route path="/solutions/crypto" element={<Crypto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
