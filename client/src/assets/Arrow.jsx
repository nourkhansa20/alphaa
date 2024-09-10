import React, { forwardRef } from "react";

// Use forwardRef to allow ref to be passed to this component
const Arrow = forwardRef((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        xmlSpace="preserve"
        ref={ref} // Attach the ref here
        {...props}
    >
        <path
            d="M15.563 40.836a.997.997 0 0 0 1.414 0l15-15a1 1 0 0 0 0-1.414l-15-15a.999.999 0 1 0-1.414 1.414l14.293 14.293-14.293 14.293a1 1 0 0 0 0 1.414"
            style={{
                stroke: "#FF9021",
                // strokeMiterlimit: 10,
                strokeWidth: 6,
            }}
        />
    </svg>
));

// Give a name to the component for better debugging
Arrow.displayName = "Arrow";

export default Arrow;
