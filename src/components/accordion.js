import React, { useState } from "react";

const Accordion = (props) => {

  const [activeIndex, setActiveIndex] = useState();

  const accordionClicked = (index) => {
    setActiveIndex(index);
  };

  //fetching data through props from APP Component
  const data = props.items;

  return (
    <div>
      <div className="ui styled fluid">
        <h1>Accordion APP</h1>
      </div>
      <br />
      {data.map((item, i) => {

        //   checking the active index of the accordion

        const active = i === activeIndex ? "active" : "";

        return (
          <div
            className="ui styled fluid accordion"
            key={i}
            onClick={() => accordionClicked(i)}
            style={{marginBottom: "20px"}}
          >
            <div className={`title + ${active}`}>
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <div className={`content + ${active}`}>{item.description}</div>
          </div>
          
        );
      })}
    </div>
  );
};

export default Accordion;
