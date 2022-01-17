import React from "react";
import "./network-utils.css";
import Navbar from "../Navbar";

const styles = {
  networkUtils: {
    width: "90%",
    fontSize: "2rem",
    textAlign: "left",
    paddingLeft: "0.3em",
    paddingTop: "1em",
    paddingBottom: "0.1em",
  },
};

const NetworkUtils = () => {
  return (
    <div className="w-full h-full whitebg mainContainer">
      <Navbar />
      <div id="networkUtilsBody">
        <div className="w-full header">
          <div style={styles.networkUtils}>Network Utilities</div>
        </div>
      </div>
      
    </div>
  );
};

export default NetworkUtils;
