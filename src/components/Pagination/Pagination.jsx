import ReactPaginate from "react-paginate";

const Pagination = ({ numberOfPages, setCurrentPage }) => {
  //  Handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <ReactPaginate
      pageCount={numberOfPages}
      pageRangeDisplayed={3}
      marginPagesDisplayed={0}
      previousLabel="Previous"
      nextLabel="Next"
      onPageChange={handlePageClick}
      containerClassName="flex justify-center items-center gap-4 mt-12 mb-6 flex-wrap"
      pageClassName="rounded-md bg-transparent hover:bg-gray-200 transition duration-200 group"
      pageLinkClassName="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 text-gray-600 group-hover:text-gray-800"
      activeClassName="!bg-[#09c] hover:bg-[#09c] hover:bg-opacity-90"
      activeLinkClassName="!text-white font-semibold flex items-center justify-center w-7 h-7 md:w-10 md:h-10"
      previousClassName="text-gray-600 rounded-md hover:text-gray-800 hover:bg-gray-200 transition duration-200"
      previousLinkClassName="px-2 py-1 md:px-3 md:py-2 flex items-center justify-center"
      nextClassName="text-gray-600 rounded-md hover:text-gray-800 hover:bg-gray-200 transition duration-200"
      nextLinkClassName="px-2 py-1 md:px-3 md:py-2 flex items-center justify-center"
      breakClassName="text-gray-600" // ...
      disabledClassName="opacity-50 pointer-events-none"
    />
  );
};

export default Pagination;
