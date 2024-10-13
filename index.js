const heading=React.createElement("h1",{},"hello World in react");
// <div>
//    <div>
//     <h1<a>Link</a>/>google link
//     <h1<a>Link</a>/>fb link
//    </div>
// </div>
//above is the structure below is the code


const heading2=React.createElement("div",{id:"h1-2"},
    [React.createElement("h1",{},React.createElement("a",{href:"https://google.com"},"Link")),
    React.createElement("h1",{},React.createElement("a",{href:"https://facebook.com"},"Link"))]);



const root=ReactDOM.createRoot(document.getElementById("container1"));
root.render(heading);
root.render(heading2);