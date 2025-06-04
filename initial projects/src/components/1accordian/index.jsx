import React from "react";
import data from "./data";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = React.useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] =
    React.useState(false);
  const [multiple, setMultiple] = React.useState([]);

  function handleSingleSelection(currentId) {
    setSelected((prev) => (prev === currentId ? null : currentId));
  }

  function handleMultipleSelection(currentId) {
    setMultiple((prev) =>
      prev.includes(currentId)
        ? prev.filter((id) => id !== currentId)
        : [...prev, currentId]
    );
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        {enableMultipleSelection ? "Disable" : "Enable"} Multiple Selection
      </button>
      <div className="accordian">
        {data?.length ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.title}</h3>
                <span>
                  {enableMultipleSelection
                    ? multiple.includes(dataItem.id)
                      ? "-"
                      : "+"
                    : selected === dataItem.id
                    ? "-"
                    : "+"}
                </span>
              </div>
              {enableMultipleSelection
                ? multiple.includes(dataItem.id) && (
                    <div className="content">{dataItem.info}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.info}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
/*
flow of this code
--makes function
--if you know that state change is involved than initialize it
--check data
--map through each item in data
--for each item take key and value to be displayed
--now write onclick as per this code, click of title, call the function
--either write seprate function or write there only instead of calling function
-----------------------for function----------------
--pass the id of the item to be passed
--if you want to select multiple items, then check if the id is already present in the array
--if present, remove it from the array
--if not present, add it to the array
--if you want to select only one item, then check if it is already selected or not
--show the data accordingly
--make style.css file
--import the css file in the component
--export the component to be used in the app
--import the component in the app
*/
