import React from "react";
import "./App.css";
import "./components/accordian/styles.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random color";
import StarRating from "./components/star rating";
import ImageSlider from "./components/Image Slider";
import LoadMore from "./components/load more";
import TreeView from "./components/tree view";
import menus from "./components/tree view/data.js";
import QRcode from "./components/QRcode";
import ThemeChange from "./components/ThemeSwitch/index.jsx";
import ScrollIndicator from "./components/scroll-indicator/index.jsx";
import TabTest from "./components/custom-tabs/tab-test.jsx";
function App() {
  return (
    <div className="App">
      {/*Accordian*/}
      {/* <Accordian /> */}

      {/*Random Color*/}
      {/* <RandomColor /> */}

      {/*Star Rating*/}
      {/* <StarRating /> */}

      {/*Image Slider*/}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={10}
        page={1}
      /> */}

      {/*Load More*/}
      {/* <LoadMore/> */}

      {/*Tree View*/}
      {/* <TreeView menus={menus} /> */}

      {/*QR Code Generator*/}
      {/* <QRcode />       */}

      {/*Theme Switch*/}
      {/* <ThemeChange /> */}

      { /*Scroll Indicator*/}
      {/* {<ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> } */}

      {/*Custom Tabs*/}
      <TabTest />      
    </div>
  );
}

export default App;
