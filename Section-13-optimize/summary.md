207.
memo check whether props changed, if not, do not re-render the component
const Counter = memo(function Counter({...props}){});
memo is wrapped around normal functions

210.
useMemo, only wrap complex calculation to save the results of the function.
Use with care, do not use for the function that will always change, cause extra performance

//only change when initialCount changes, but not when counter changes
  const initialCountIsPrime = useMemo(() => isPrime(initialCount),[initialCount]);

  const [counter, setCounter] = useState(initialCount);


211.
virtual DOM:
virtual dom is lightweight javascript object that mirrors the HTML structure of a web page. Virtual dom is not HTML code.

render for the first time, react create the component tree, then derive the actual HTML code that should be rendered from the component tree and insert into the dom. Then creates a virtual DOM snapshot.

When state update, react then compare new snapshot to last snapshot. Only update the part that changed.

212.
why keys matter when managing state:
state belongs to the position and component type.
amount or position of the same type component may change (dynamically generated list), needs keys. Should not use index, since index always stays the same. The first item index is always 0, but the first item (value) can change. Use the key that strictly connect to a specific value.

[{value: -1, id: Math.random() * 1000}] use the id

213.
not using index, but using unique key React does not rerender the same elements in previous list. Since key are store with the element and React can know they are the same. Should not use index, or assign a fresh new key when populating the list, since keys will be reassigned each time. And React will think it's new component. Should store key with the component like the example above.

214.
Or use the value you want to trigger the component to be rendered as the key to rerender the whole component instead of using useEffect (have two executions of component instead of one).
    <Counter key={chosenCount} initialCount={chosenCount} />

### In React, state in a component is intended to represent the local state of that component, when you initialize state in a child component using a prop, the initial value is set only once when the component mounts. Subsequent changes to the prop won't automatically update the state in the child component. When you want a child component's state to reflect changes in a parent's props, you need to explicitly set that up using hooks like useEffect or assign key to the component.
    Initial Value: The useState hook captures the value of the prop when the component first renders. It does not continuously track the prop; rather, it just uses that initial value as the starting point for the local state.

215.
state scheduling 
batching

state update in one function will be batched together and only lead to one update, one rerender instead of two.
function handleSetCount(newCount){
    setChosenCount(newCount);
    setChosenCount((prev) => prev + 1);
}
