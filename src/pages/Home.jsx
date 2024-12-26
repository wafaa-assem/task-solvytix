import { useEffect } from "react";
import Products from "../components/Products/Products";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Products />
    </div>
  );
};

export default Home;
