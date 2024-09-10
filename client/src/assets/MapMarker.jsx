import * as React from "react";
const MapMarker = (props) => (
    <svg
        aria-hidden="true"
        className="e-font-icon-svg e-fas-map-marker-alt"
        viewBox="0 0 384 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.54 13.773-29.93 13.773-39.464 0M192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80" />
    </svg>
);
export default MapMarker;
