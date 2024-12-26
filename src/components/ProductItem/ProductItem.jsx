import { IoStar } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="custom-shadow cursor-pointer rounded relative group">
      <Link to={`/product/${product.id}`}>
        <article>
          <img
            loading="lazy"
            src={product.imageCover}
            alt={product.category.name}
            className="w-[280px] h-full m-auto mb-4"
          />
          <div className="px-4 py-6 flex flex-col gap-y-1">
            <h2 className="line-clamp-1 font-medium text-[#09c] hover:text-[#f97316] duration-200">
              {product.title}
            </h2>
            <p className="text-[#0c4368] font-semibold">
              {product.category.name}
            </p>
            <p className="flex items-center gap-1 text-[#6b7280] text-sm">
              {product.brand.name} <span className="text-[#6b7280]">|</span>{" "}
              <span className="text-[#22c55e] text-sm">Available</span>
            </p>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1 text-[#09c]">
                <span>EGP</span>
                {product.price}
              </p>
              <p className="flex items-center gap-2">
                <IoStar className="text-yellow-400 text-lg" />{" "}
                <span className="text-[#0c4368] font-medium">
                  {product.ratingsAverage}
                </span>
              </p>
            </div>
          </div>
        </article>
      </Link>
      {/* icon */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-4">
        <Link
          to={`/product/${product.id}`}
          className="w-10 h-10 rounded-full flex justify-center items-center bg-[#3b82f6] bg-opacity-70 hover:bg-[#0c4368] opacity-0 translate-y-5 will-change-transform group-hover:opacity-100 group-hover:translate-y-0 duration-300"
        >
          <FaEye className="text-white text-lg" />
        </Link>
        <button className="w-10 h-10 rounded-full flex justify-center items-center bg-[#3b82f6] bg-opacity-70 hover:bg-[#0c4368] opacity-0 translate-y-5 will-change-transform group-hover:opacity-100 group-hover:translate-y-0 duration-500">
          <MdOutlineShoppingCart className="text-white text-lg" />
        </button>
        <button className="w-10 h-10 rounded-full flex justify-center items-center bg-[#3b82f6] bg-opacity-70 hover:bg-[#0c4368] opacity-0 translate-y-5 will-change-transform group-hover:opacity-100 group-hover:translate-y-0 duration-700">
          <FaRegHeart className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
