//single selection
//multiple selection


import { useState } from "react";
import data from "./data";
import "./styles.css";


export default function Accordian() {
  // State to keep track of the currently selected item in single selection mode
  const [selected, setSelected] = useState(null);


  // State to enable/disable multi-selection mode
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);


  // State to keep track of the selected items in multi-selection mode
  const [multiple, setMultiple] = useState([]);


  // Function to handle single selection
  function handleSingleSelection(getCurrentId) {
    // If the current item is already selected, set the selected state to null (deselect)
    // Otherwise, set the selected state to the current item's id
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }


  // Function to handle multi-selection
  function handleMultiSelection(getCurrentId) {
    // Create a copy of the multiple array
    let cpyMutiple = [...multiple];


    // Find the index of the current item in the multiple array
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);


    // If the current item is not in the multiple array, add it
    // Otherwise, remove it
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);


    // Update the multiple state with the modified array
    setMultiple(cpyMutiple);
  }


  console.log(selected, multiple);


  return (
    <div className="acc-wrapper">
      {/* Button to enable/disable multi-selection mode */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>


      <div className="accordian">
        {/* Render the accordion items */}
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              {/* Accordion item title */}
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>


              {/* Accordion item content */}
              {enableMultiSelection ? (
                // In multi-selection mode, show the content if the item is selected
                multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="acc-content ">{dataItem.answer}</div>
                )
              ) : (
                // In single-selection mode, show the content if the item is selected
                selected === dataItem.id && (
                  <div className="acc-content ">{dataItem.answer}</div>
                )
              )}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}