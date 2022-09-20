import React from "react";

function Loading(props) {
  return (
    <>
      {props.loading && (
        <div className="loading">
          <div className="ring">
            <span></span>
          </div>
        </div>
      )}
      {!props.loading && props.children}
    </>
  );
}

export default Loading;
