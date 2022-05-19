import React from "react";

const Spinner = () => {
  return (
    <div className="animate-spin rai-spinner">
      <div className="rai-spinner-outer" />
      <div className="rai-spinner-inner" />
      <style jsx>{`
        .rai-spinner {
          width: 1.6em;
          height: 1.6em;
          position: relative;
        }
        .rai-spinner-inner,
        .rai-spinner-outer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
        .rai-spinner-outer {
          border: 0.125em solid currentColor;
          opacity: 0.2;
        }
        .rai-spinner-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          border-top: 0.2em solid white;
          border-right: 0.2em solid rgba(255, 255, 255, 0.4) !important;
          border-bottom: 0.2em solid rgba(255, 255, 255, 0.4) !important;
          border-left: 0.2em solid rgba(255, 255, 255, 0.4) !important;
        }
      `}</style>
    </div>
  );
};

export default Spinner;
