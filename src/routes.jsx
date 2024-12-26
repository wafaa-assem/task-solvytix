import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

// lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
