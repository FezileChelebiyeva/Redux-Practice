import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCustomers from "../pages/add-customers";
import CustomerList from "../pages/customers-list";
import FavoriteCustomers from "../pages/favorite-customers";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/favorite-customers" element={<FavoriteCustomers />} />
        <Route path="/add-customers" element={<AddCustomers />} />
      </Routes>
    </div>
  );
};

export default Routing;
