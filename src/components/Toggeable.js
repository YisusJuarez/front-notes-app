import { useState } from "react";
export const Toggeable = ({ children, buttonLabel }) => {
  const [visible, setVisible] = useState(false);
  const hiddenWhenVisible = { display: visible ? "none" : "" };
  const shownWhenVisible = { display: visible ? "" : "none" };
  return (
    <>
      <div style={hiddenWhenVisible}>
        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          {buttonLabel}
        </button>
      </div>
      <div style={shownWhenVisible}>
        {children}
        <button onClick={() => setVisible(false)}>
          Cancel
        </button>
      </div>
    </>
  );
};
