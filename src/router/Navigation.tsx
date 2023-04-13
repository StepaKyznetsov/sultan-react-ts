import React from "react";
import Catalog from "../pages/Catalog/Catalog";
import Product from "../pages/Product/Product";
import Basket from "../pages/Basket/Basket";
import Admin from "../pages/Admin/Admin";
import { Routes, Route, Navigate } from "react-router-dom";
import { ADMIN, BASKET, CATALOG } from "../constants";

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path={CATALOG} element={<Catalog />} />
      <Route path={CATALOG + "/:id"} element={<Product />} />
      <Route path={BASKET} element={<Basket />} />
      <Route path={ADMIN} element={<Admin />} />
      <Route path="*" element={<Navigate replace to={CATALOG} />} />
    </Routes>
  );
};

export default Navigation;
