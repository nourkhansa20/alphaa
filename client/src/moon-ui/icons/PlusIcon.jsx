import React from 'react'

const PlusIcon = ({...props}) => (
    <svg
        fill="#000000"
        viewBox="0 0 24 24"
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 .896-2 2s.896 2 2 2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 .071c1.104 0 2-.896 2-2s-.896-2-2-2z" />
    </svg>
);

export default PlusIcon
