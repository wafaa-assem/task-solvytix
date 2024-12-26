import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchProduct = ({
  currentPage,
  products,
  setProducts,
  originalProducts,
}) => {
  const [searchValue, setSearchValue] = useState("");
  // hanlde search
  const handleSearch = (value) => {
    setSearchValue(value);
    const filteredProducts = originalProducts.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase());
    });

    setProducts(filteredProducts);
  };

 

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by title ..."
          className="border border-[#09c] border-opacity-15 focus:outline-none px-5 py-2 w-full rounded-full"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <IoSearch className="absolute top-1/2 right-5 -translate-y-1/2 text-[#cbd5e1] text-lg" />
      </div>
      {/* if there are no results */}
      {products?.length === 0 && (
        <div className="flex justify-center items-center min-h-80">
          <p className="font-semibold text-4xl text-[#0c4368]">
            Sorry, no products found !
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
