import Header from "./components/Header";
import UserInputCard from "./components/UserInputCard";
import Result from "./components/Result";
import { useState } from "react";

function App() {

  const [inputValues, setInputValues] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleOnChange(fieldName, value) {
    setInputValues((prevValues) => {
      let newValues = { ...prevValues };
      newValues[fieldName] = parseInt(value);

      return newValues;
    });
  }

  return (
    <>
      <Header />
      <UserInputCard inputValues={inputValues} handleOnChange={handleOnChange}/>
      <Result inputValues={inputValues}/>
    </>
  );
}

export default App;
