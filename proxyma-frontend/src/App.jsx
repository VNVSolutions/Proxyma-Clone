import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/utils/Layout/Layout.jsx";
import BuyNow from "./pages/BuyNow.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="buy" index element={<BuyNow />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
