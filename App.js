/* Nested Structure
    <div id="parent">
        <div id="Child">
            <h1></h1>
        </div>
    </div>

    ReactElement(Object) => HTML(Browser understands)
*/

const parent = React.createElement("div", {id:"parent"}, 
    [
        React.createElement("div", {id:"child1", key:"child1"},
            [
                React.createElement("h1", {id:"firstH1", key:"h1"}, "I m an H1 tag"), 
                React.createElement("h2", {id:"secondH2", key:"h2"}, "I m an H2 Tag")
            ]
         ),
         React.createElement("div", {id:"child2", key:"child2"},
            [
                React.createElement("h1", {id:"firstH1", key:"h1"}, "I m an H1 tag"), 
                React.createElement("h2", {id:"secondH2", key:"h2"}, "I m an H2 Tag")
            ]
         )
    ]
);

// React can only be written inside the JSX.
// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent); //object