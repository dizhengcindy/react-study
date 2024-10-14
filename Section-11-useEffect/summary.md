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
