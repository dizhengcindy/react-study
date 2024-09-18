const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const getKey = (label) => {
  const labelArray = label.split(" ");

  const key =
    labelArray[0] +
    (labelArray.length > 1 ? capitalizeFirstLetter(labelArray[1]) : "");
  return key;
};

export default function UserInputField({
  label,
  handleValueChange,
  inputValues,
}) {
  const key = getKey(label);
  return (
    // <div>
    <p>
      <label>{label}</label>
      <input
        type="number"
        required
        min="0"
        onChange={(event) => handleValueChange(key, event.target.value)}
        value={inputValues[key]}
      />
    </p>
    // </div>
  );
}
