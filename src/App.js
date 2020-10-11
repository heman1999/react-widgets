import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Router from "./components/Router";
import Header from "./components/Header";

const App = () => {
  const items = [
    {
      title: "Occaecat in magna sint consequat labore id enim proident.",
      content: "Qui incididunt ea excepteur eiusmod occaecat magna.",
    },
    {
      title: "Qui mollit aute proident eiusmod labore anim .",
      content: "Qui incididunt ea excepteur eiusmod occaecat magna.",
    },
    {
      title: "Adipisicing incididunt mollit veniam et laborum nulla nisi.",
      content: "Qui incididunt ea excepteur eiusmod occaecat magna.",
    },
  ];

  const options = [
    { label: "Red", value: "red" },
    { label: "Yellow", value: "yellow" },
    { label: "Green", value: "green" },
  ];

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Router path="/">
        <Accordion items={items} />
      </Router>

      <Router path="/list">
        <Search />
      </Router>

      <Router path="/dropdown">
        <DropDown
          label="Select a color"
          options={options}
          selected={selected}
          onSetSelected={setSelected}
        />
      </Router>

      <Router path="/translate">
        <Translate />
      </Router>
    </div>
  );
};

export default App;
