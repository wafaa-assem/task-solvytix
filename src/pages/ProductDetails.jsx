import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSpecificProduct } from "../APIS/getSpecificProduct";
import Loader from "./../components/Loader/Loader";
import { IoStar } from "react-icons/io5";
import { ImCart } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa6";

const ProductDetails = () => {
  const { id } = useParams(); // global id
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getSpecificProduct(id)
      .then(({ data }) => {
        setProductDetails(data?.data);
        setError(null);
      })
      .catch((error) => setError(error?.response?.data?.errors?.msg))
      .finally(() => setIsloading(false));
  }, [id]);

  // handle loading
  if (isloading) {
    return <Loader />;
  }
  // handle error
  if (error) {
    return (
      <div className="flex justify-center items-center text-3xl font-bold text-red-500 min-h-screen">
        {error}
      </div>
    );
  }

  return (
    <section className="py-[110px] md:py-[140px] min-h-screen">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div>
            <img
              loading="lazy"
              src={productDetails?.imageCover}
              className="w-full"
              alt={productDetails?.category.name}
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-1">
            <h2 className="text-[#0c4368] font-bold text-2xl flex items-center justify-between">
              {productDetails?.title}
              <Link to="/">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#09c]">
                  <FaArrowLeft className="text-white text-lg" />
                </div>
              </Link>
            </h2>
            <p className="text-[#09c] font-semibold">
              {productDetails?.category.name}
            </p>
            <p className="flex items-center gap-1 text-[#6b7280] text-sm">
              {productDetails?.brand.name}{" "}
              <span className="text-[#b9bcc4]">|</span>{" "}
              <span className="text-[#22c55e] text-sm">Available</span>
            </p>
            <p className="flex items-center gap-3">
              <IoStar className="text-yellow-400 text-lg" />{" "}
              <span className="text-[#0c4368] font-medium">
                {productDetails?.ratingsAverage}
              </span>
            </p>
            <p className="my-3 text-[#64748b]">{productDetails?.description}</p>
            <p className="flex items-center gap-1 text-[#09c] font-bold">
              <span>EGP</span>
              {productDetails?.price}
            </p>

            <button className="bg-[#09c] py-2 rounded-md mt-10 text-white text-lg font-medium flex items-center justify-center gap-3 group">
              {" "}
              <ImCart className="text-lg  group-hover:animate-swing" /> ADD TO
              CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
