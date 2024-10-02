React render cycle:
useRef: get direct DOM access 
first render, ref.current.value is not available 

useState: 
should use for values that are directly reflected in the UI
should not use it for "behind the scene" values that have no direct UI impact.

useRef:
do not cause component re-evaluation when changed (does not cause rerender)
can be used to gain direct DOM element access (great for reading values or accessing certain browser APIs)

138.
    variable is not a solution
   (1) 
    export default function Button({title, challengeTime}){
        let timer; //since update state, component re-execute, which means the timer is recreated.
        function handleStart() {
            timer = setTimeout(() => {
            setTimerExpired(true);
            }, targetTime * 1000);

            setTimerStarted(true);
        }

        function handleStop(){
            clearTimeout(timer); //this is a different time
        }
    }
    (2) 
    let timer; //shared across all Button component 
    export default function Button({title, challengeTime}){
        function handleStart() {
            timer = setTimeout(() => {
            setTimerExpired(true);
            }, targetTime * 1000);

            setTimerStarted(true);
        }

        function handleStop(){
            clearTimeout(timer); 
        }
    }
    useRef:
    timer.current