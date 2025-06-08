import React from "react";
import "./App.css";
import "./components/1accordian/styles.css";
import Accordian from "./components/1accordian/index.jsx";
import RandomColor from "./components/2random color/index.jsx";
import StarRating from "./components/3star rating/index.jsx";
import ImageSlider from "./components/4Image Slider/index.jsx";
import LoadMore from "./components/5load more/index.jsx";
import TreeView from "./components/6tree view/index.jsx";
import menus from "./components/6tree view/data.js";
import QRcode from "./components/7QRcode/index.jsx";
import ThemeChange from "./components/8ThemeSwitch/index.jsx";
import ScrollIndicator from "./components/9scroll-indicator/index.jsx";
import TabTest from "./components/10custom-tabs/tab-test.jsx";
import Modaltest from "./components/11custom-modal-popup/modal-test.jsx";
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
      <LoadMore/>

      {/*Tree View*/}
      {/* <TreeView menus={menus} /> */}

      {/*QR Code Generator*/}
      {/* <QRcode />       */}

      {/*Theme Switch*/}
      {/* <ThemeChange /> */}

      { /*Scroll Indicator*/}
      {/* {<ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> } */}

      {/*Custom Tabs*/}
      {/* <TabTest />       */}

      {/*Custom Modal Popup*/}
      {/* <Modaltest /> */}

    </div>
  );
}

export default App;
