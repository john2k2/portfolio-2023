//components
import HeaderComp from "@/components/HeaderComp";
import HeroComp from "@/components/HeroComp";
import AboutCompot from "@/components/AboutCompot";
import ContactComp from "@/components/ContactComp";
import FooterCompot from "./components/FooterCompot";

function App() {
  return (
    <div className="App">
      <div
        className=" bg-gradient-to-b  
      from-tuna to-bostonblue"
      >
        <HeaderComp />
        <HeroComp />
      </div>
      <div
        className="bg-gradient-to-t  
      from-tuna to-bostonblue"
      >
        <AboutCompot />
      </div>
      <div
        className="bg-gradient-to-b  
      from-tuna to-bostonblue"
      >
        <ContactComp />
        <FooterCompot />
      </div>
    </div>
  );
}

export default App;
