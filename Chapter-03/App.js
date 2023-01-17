import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./logo.png";
import userIcon from "./user_icon.png";
import 'font-awesome/css/font-awesome.min.css';
//Coding assign-Q1: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const Header = React.createElement(
//   "div",
//   { className: "title", key: "title" },
//   [
//     React.createElement(
//       "h1",
//       {
//         key: "h1",
//       },
//       "This is h1 tag"
//     ),
//     React.createElement(
//       "h2",
//       {
//         key: "h2",
//       },
//       "This is h2 tag"
//     ),
//     React.createElement(
//       "h3",
//       {
//         key: "h3",
//       },
//       "This is h3 tag"
//     ),
//   ]
// );

// Q2: Create the same element using JSX

// const Header = (
// <div className="title" id="title">
//   <h1 key="h1">This is h1 tag</h1>
//   <h2 key="h2">This is h2 tag</h2>
//   <h3 key="h3">This is h3 tag</h3>
// </div>
// );

//Q3: Create a functional component of the same with JSX - I have written using normal funtion convention.

// const Header = function() {
//   return (
//     <div className="title" id="title">
//       <h1 key="h1">This is h1 tag</h1>
//       <h2 key="h2">This is h2 tag</h2>
//       <h3 key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

//Q4: Pass attribute into the tag in JSX

// const Header = (
// <div className="title" id="title">
//   <h1 style={{color:"red"}} key="h1">This is h1 tag</h1>
//   <h2 style={{color:"blue"}} key="h2">This is h2 tag</h2>
//   <h3 style={{color:"violet"}} key="h3">This is h3 tag</h3>
// </div>
// );

//Q5: Composition of Component (Add a component inside another)

// const Header1 = function () {
//   return <h4 key="h4">This is heading 4..</h4>;
// };

// const Header = function () {
//   return (
//     <div className="title" id="title">
//       <h1 key="h1">This is h1 tag</h1>
//       <h2 key="h2">This is h2 tag</h2>
//       <h3 key="h3">This is h3 tag</h3>
//       <Header1 />
//     </div>
//   );
// };

// Q6: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

// const TitleElement = () => {
//   return <h2 style={{ color: "red" }}>This Title Element</h2>;
// }; // This is Title Component

// const Header = function ()  {
//   return (
//     <div className="Title" key="title">
//       <h1 style={{ color: "blue" }} key="h1">
//         This is h1 tag
//       </h1>
//       <h2 style={{ color: "palevioletred" }} key="h2">
//         This is h2 tag
//       </h2>
//       <h3 style={{ color: "green" }} key="h3">
//         This is h3 tag
//       </h3>
//     </div>
//   );
// };

//{/* This is {<TitleComponent></TitleComponent>}*/}

/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const Header = function () {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />); // we can also write like this for functional component root.render(Header())
