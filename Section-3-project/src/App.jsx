import Header from "./components/Header/Header.jsx";

import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

console.log("APP COMPONENT EXECUTING");

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
