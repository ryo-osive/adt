import React from "react";

const styles = {
    AssetDetails: {
        width: '90%',
        fontSize: '2rem',
        textAlign: 'start',
        paddingLeft: '0.3em',
        paddingTop: '0.5em',
        paddingBottom: '0.1em',
    }
}


const AssetDetails = () => {
  return (
    <div className="w-full h-full whitebg mainContainer">
      <Navbar />
      <div id="dashboardBody">
        <div className="w-full header">
          <div style={styles.AssetDetails}>Asset Detail</div>
        </div>
        
      </div>
    </div>
  );
};

export default AssetDetails;
