177.
side effect: "tasks" that don't impact the current component render cycle

179.
after component execution, JSX has been returned, side effect function in useEffect  will be executed. If state been updated, React will check whether the dependencies values changed, then decide whether to execute the side effect function again. 

If with empty dependencies array [], React never re-executes this effect function, it only execute it once after the component was executed for the first time. 

If omit the [] completely and only has the side effect function in the useEffect, the side effect function would be executed after every component render cycle.

180.
local storage data must be a string

 const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }

useEffect to prevent infinite loop or used for after component rendered at lease once

181.
useEffect: used for async calls

183.
access ref.current must wait until component has been rendered once, otherwise ref is undefined
    so can NOT do:
        dialog = useRef();
        if(open){
            dialog.current.showModal();
        }
187.
useEffect cleanup function
return () => {};

runs right before component dismount (removed from the DOM) or before useEffect function runs AGAIN

188.
function is an object in js, even with the same content, two function are still not the same. If add function in the dependencies could cause infinite loop if function keep been recreated. A function gets recreated when the component re-render, like when state updates.

189.
To fix the problem in 188, we can wrap the function in useCallback.
const updateFunc = useCallback(function updateFunc(){}, []);
the dependencies in useCallback should only be props or state