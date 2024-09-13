1. browser react app, code sand box
    react.new 
2. section 3
    38) components are JS functions, to be component, component name must start with upper case (MyHeader) and returns a "renderable" content
    39) custom components can be created as JS function:
        function Header(){
            return (<header></header>); // wrap in () to tell that it belongs together
        }
        function App() {
            return (
                <div className="App">
                <Header />
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                </div>
            );
        }
        export default App;

    41) 
        loads index.js file first.

        Analyze and render root component to the dom and then the component tree is been analyzed and rendered by React step by step. The React tree is just analyzed by React, and React combine all the JSX code from all components to generate the DOM. 

        UpperCase name for custom component can prevent name collision with built-in component and it also tells React that its a custom component and React execute it as a function. 
    
    Quiz 1:

        React does not derive or generate any HTML file. It derives a component tree that's then used to perform commands that update the website DOM. Your JSX code leads to a tree-like code structure that "tells" React how the different components are related and how the UI should look like. It then executes appropriate commands to manipulate the real DOM to reflect that target structure / code.

        purpose of JSX:  The idea behind JSX is that you have an easier time defining the target HTML code that should be generated by your components. It's not required to create custom components - instead that's done by creating a JavaScript function.
    46) 
        props syntax:

        <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}>
            //Grouping Received Props Into a Single Object
            export default function CoreConcept({ ...concept }) { 
                // ...concept groups multiple values into a single object
                // Use concept.title, concept.description etc.
                // Or destructure the concept object: const { title, description, image } = concept;
            }
            or
            export default function CoreConcept({ {title, description, image} }) {}

        <CoreConcept {...CORE_CONCEPTS[0]}>
            export default function CoreConcept({ {title, description, image} }) {}
        
        <CoreConcept concept={CORE_CONCEPTS[0]}>
            export default function CoreConcept({ concept }) {
                // Use concept.title, concept.description etc.
                // Or destructure the concept object: const { title, description, image } = concept;
            }

        set default value
            export default function Button({ caption, type = "submit" }) { 
                // caption has no default value, type has a default value of "submit"
            }

    50) 
        event listener
        function handleClick(msg){
            console.log(msg);
        }

        <TabButton onClick={handleClick}  />

        //"configure" the execution of an event-dependent function
        <TabButton onClick={() => handleClick("Hello world")} />

        export default function TabButton({children, onClick}){
            return (
                <button onClick={onClick}>{children}</button> 
                //handleClick must not be called. Not executed by you but by React when button is been clicked
            );
        }
       
    54) 
    const [selectedTopic, setSelectedTopic] = useState("Please choose a value");
    function handleSelect(selection){
        setSelectedTopic(selection);
        console.log(selectedTopic); //previous value, still in old app function
    }
    console.log previous value, after setState, React schedule state update, and then re-execute the component function. The updated value will be available after the component function executed again. 
    
    56) render content conditionally
    1.
    {!selectedTopic ? <p>Please select a topic</p> : <div>other content</div>}
    2.
    {!selectedTopic && <p>Please select a topic</p> }
    {selectedTopic && <div>other content</div>}
    3.
    use a variable to store the jsx
    let tabContent = <p>Please select a topic</p>;
    if(selectedTopic){
        tabContent = (<div>other content</div>);
    }

    return tabContent;

    57) styling className
    <button className={isSelected ? "active": undefined} ><button>

    58) output list data dynamically
    JSX is able to dealing with array of renderable data {["Hello", "World"]} or {[<p>Hello</p>, <p>World</p>]}
    {CORE_CONCEPTS.map((conceptItem)=>{
        <CoreConcept key={conceptItem.title} {...conceptItem}>
    })}

    key is for React to tell different items apart and React can efficiently render and update the list 


  