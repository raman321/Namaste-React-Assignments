const heading1 = React.createElement("h1", {}, "heading1");

const heading2 = React.createElement("h2", {}, "heading2");
const heading3 = React.createElement("h3", {}, "heading3");
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2, heading3]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
