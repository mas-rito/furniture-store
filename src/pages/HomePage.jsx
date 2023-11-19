import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import Action from "../components/Sections/Action";
import Category from "../components/Sections/Category";
import Hero from "../components/Sections/Hero";
import Product from "../components/Sections/Product";
import Value from "../components/Sections/Value";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Product />
      <Value />
      <Action />
      <Footer />
    </div>
  );
};

export default HomePage;
