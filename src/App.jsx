//components
import HeaderComp from "@/components/HeaderComp";
import HeroComp from "./components/HeroComp";
import AboutCompot from "./components/AboutCompot";



function App() {
  return (
    <div className="App">
      <div
        className=" bg-gradient-to-b  
      from-tuna to-bostonblue
        "
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
    </div>
  );
}

export default App;
