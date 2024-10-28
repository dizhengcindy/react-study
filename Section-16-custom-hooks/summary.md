Hooks can be used inside of components or other hooks
Hooks cannot be called inside of if statement, must be top level.

246.
any state managed by custom hook will also belong to the component where custom hook been called. If state in custom hook update the component get executed again. The same as you are managing the states directly in the component. 

247.
state updating function are guaranteed by React that they will never change