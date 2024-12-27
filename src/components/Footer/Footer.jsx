const Footer = () => {
  return (
    <footer className="py-12 w-full border-t border-gray-200 bg-[#f0f3f2] backdrop-blur-lg">
      <div className="container">
        <h4 className="text-2xl text-[#0c4368] font-bold">
          Get the ShopMart App
        </h4>
        <p className="md:text-[18px] text-[#6b7280] mb-4">
          We will send you a link, open it on your phone to download the app
        </p>
        <div>
          <div className="flex flex-col md:flex-row mt-3 gap-5 md:gap-20">
            <input
              type="email"
              placeholder="Email"
              id="small-input"
              className="block w-full outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs p-2"
            />
            <button
              type="button"
              className="focus:outline-none text-white bg-[#09c] font-medium rounded-lg text-sm px-12 text-nowrap py-3"
            >
              Share App Link
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
