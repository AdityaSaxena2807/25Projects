import React from "react";
import MenuList from "./menu-list";
import "./styles.css";
function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = React.useState(
    {}
  );

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }
  return (
    <li className="menu-item-container">
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <p>{item.label}</p>
        {item?.children?.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>+</span>
        ) : null}
      </div>
      {item?.children?.length && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
