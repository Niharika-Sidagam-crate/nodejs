import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";
import { All } from "../components/Nav/All";
import { Electronics } from "../components/Nav/Electronics";
import { Groceries } from "../components/Nav/Groceries";
import { HomeLifestyle } from "../components/Nav/HomeLifestyle";
import { Jewellery } from "../components/Nav/Jewellery";
import { Wellness } from "../components/Nav/Wellness";
import { Supplies } from "../components/Nav/Supplies";
import { Fashion } from "../components/Nav/Fashion";
import { ProductDetails } from "../pages/ProductDetails";

import { Signin } from "../pages/Signin";
import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/Cart/CartPage";

export const Allroutes = ({endPointState,setEndPointState}) => {
  console.log(endPointState,"yuytt");
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Groceries" element={<Groceries endPointState={endPointState} setEndPointState={setEndPointState} />} />
      <Route path="/Electronics" element={<Electronics />} />
      <Route path="/HomeLifestyle" element={<HomeLifestyle  endPointState={endPointState} setEndPointState={setEndPointState} />} />
      <Route path="/Supplies" element={<Supplies />} />
      <Route path="/Jewellery" element={<Jewellery />} />
      <Route path="/Fashion" element={<Fashion />} />
      <Route path="/Wellness" element={<Wellness />} />
      <Route path="/All" element={<All />} />

      <Route path={`${endPointState}/:id`} element={<ProductDetails  endPointState={endPointState} setEndPointState={setEndPointState} />} /> {/* Corrected */}
      {/* <Route path="/groceries/:id" element={<ProductDetails  endPointState={endPointState} setEndPointState={setEndPointState} />} /> {/* Corrected */}
      
      <Route path="cartPage" element={<CartPage />} />

      <Route path="signin" element={<Signin />} />

      <Route path="LoginPage" element={<LoginPage />} />

    
    </Routes>
  );
};
