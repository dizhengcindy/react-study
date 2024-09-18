import UserInputField from "./UserInputField";

export default function UserInputCard({inputValues, handleOnChange}) {

  return (
    // <div id="user-input">
    <section id="user-input">
      <div className="input-group">
        <UserInputField
          label={"initial investment"}
          handleValueChange={handleOnChange}
          inputValues={inputValues}
        />
        <UserInputField
          label={"annual investment"}
          handleValueChange={handleOnChange}
          inputValues={inputValues}
        />
      </div>
      <div className="input-group">
        <UserInputField
          label={"expected return"}
          handleValueChange={handleOnChange}
          inputValues={inputValues}
        />
        <UserInputField
          label={"duration"}
          handleValueChange={handleOnChange}
          inputValues={inputValues}
        />
      </div>
      </section>
    // </div>
  );
}
