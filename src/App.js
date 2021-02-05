import React from "react";
import Accordion from "./components/accordion";


const App = () => {

    const accordionItems = [
        {
          "title": "What's React?",
          "description": "A JavaScript library for building user interfaces"
        },
        {
          "title": "Why Component-Based?",
          "description": "Build encapsulated components that manage their own state, then compose them to make complex UIs."
        },
        {
          "title": "Why JSX?",
          "description": "React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX"
        }
      ];
        
    

    return (
        <div className="ui container" >

            <Accordion items={accordionItems} />
        </div>
    )
}


export default App;