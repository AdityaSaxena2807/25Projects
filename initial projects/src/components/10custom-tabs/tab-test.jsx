import React from "react";
import Tabs from "./tabs";
function RandomComponent() {
  return <h1>Some Random Content</h1>;
}
function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  function handleChange(currentTabIndex) {
    console.log("Current Tab Index:", currentTabIndex);
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}

export default TabTest;
