import { useEffect, useState } from "react";
import Loader from "./../Loader/Loader";
import ProductItem from "../ProductItem/ProductItem";
import SearchProduct from "../SerachProduct/SearchProduct";
import { getProducts } from "../../APIS/getProducts";
import Pagination from "../Pagination/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState("");

  //  handle calling api
  const getProductsApi = (currentPage) => {
    getProducts(currentPage)
      .then((response) => {
        setProducts(response?.data?.data);
        setOriginalProducts(response?.data?.data);
        setNumberOfPages(response?.data?.metadata?.numberOfPages);
        setError("");
      })
      .catch((error) => setError(error?.message))
      .finally(() => setIsloading(false));
  };

  // call api
  useEffect(() => {
    getProductsApi(currentPage);
  }, [currentPage]);

  // handle loading
  if (isloading) {
    return <Loader />;
  }
  // handle error
  if (error) {
    return (
      <div className="flex justify-center items-center text-3lg font-bold text-red-500 min-h-screen">
        {error}
      </div>
    );
  }

  return (
    <section className="py-[110px] md:py-[140px] min-h-screen">
      <div className="container">
        {/* search */}
        <SearchProduct
          products={products}
          originalProducts={originalProducts}
          setProducts={setProducts}
          currentPage={currentPage}
        />
        {/* products list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-sm m-auto sm:max-w-none sm:m-0 !mt-16">
          {products?.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </div>
        {/* pagination */}
        <Pagination
          numberOfPages={numberOfPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default Products;
