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
import Help from "./pages/resources/Help.jsx";
import PartnersInfo from "./pages/resources/PartnersInfo.jsx";
import ScrollToTop from "./components/utils/ScrollToTop/ScrollToTop.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Partners from "./pages/partners/Partners.jsx";
import Login from "./pages/login/Login.jsx";
import AuthLayout from "./components/utils/Layout/AuthLayout.jsx";
import Registration from "./pages/registration/Registration.jsx";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="buy" index element={<BuyNow />} />
                    <Route path="/solutions/dynamic" element={<Dynamic />} />
                    <Route path="/solutions/isp" element={<Isp />} />
                    <Route path="/solutions/data-parsing" element={<DataParsing />} />
                    <Route path="/solutions/ecommerce" element={<Ecommerce />} />
                    <Route path="/solutions/crypto" element={<Crypto />} />
                    <Route path="/resources/help" element={<Help />} />
                    <Route path="/resources/partners" element={<PartnersInfo />} />
                    <Route path="/partners" element={<Partners />} />

                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* Auth layout БЕЗ Header/Footer */}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
