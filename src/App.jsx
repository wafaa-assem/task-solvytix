import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
