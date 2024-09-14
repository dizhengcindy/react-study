Section 4 Essentials
62) work with fragments
    wrap elements to return as one value
    <div></div> //unnecessary extra div

    <Fragment></Fragment> //will not render extra div to the dom

    <></>
66) Forwarding props to wrapped elements
...props: "rest property", the syntax groups all remaining object properties into a new object
1. 
    export default function Section({title, children, ...props}){ //group / merge into props
        return (
        <section {...props}> //spread remaining props
            <h2>{title}</h2>
            {children}
        </section> 
        );
    }
    <Section title="Examples" id="examples" className="section" />
2.
    <TabButton isSelected={selectedTopic === 'state} onSelect={()=>handleSelect('state')} />
    in TabButton:
        export default function TabButton({children, isSelected, onSelect}{
        return (
            <button className={isSelected ? 'active':undefined} onClick={onSelect}>{children}</button>
            );
        })

    //update onSelect to onClick:
    <TabButton isSelected={selectedTopic === 'state} onClick={()=>handleSelect('state')} />
    in TabButton:
        export default function TabButton({children, isSelected, ...props} {
        return (
            <button className={isSelected ? 'active':undefined} {...props}></button>
            );
        }
