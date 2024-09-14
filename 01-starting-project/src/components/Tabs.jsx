//wrapper component should not know anything about the about anything the content it's managing
export default function Tabs({ children, buttons, ButtonsContainer="menu" }) {
  //dynamically set the wrapper: using the component identifier render different HTML elements
  //must start with uppercase   
  //const ButtonsContainer = buttonsContainer;
  //buttons: JSX slots
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
