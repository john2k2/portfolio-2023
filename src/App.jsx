//components
import HeaderComp from "@/components/HeaderComp";
import HeroComp from "@/components/HeroComp";
import AboutCompot from "@/components/AboutCompot";
import ContactComp from "@/components/ContactComp";

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
      <div className="bg-tuna">
        <ContactComp />
      </div>
    </div>
  );
}

export default App;
