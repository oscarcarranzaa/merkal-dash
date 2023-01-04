const ChatIcon = ({ size, fill }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    className="mer-icon"
    fill={fill}
  >
    <defs>
      <style>
        {
          '.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>
    <g id="ic-contact-chat">
      <path
        className="cls-1"
        d="M4 3h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3l-3 3-3-3H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
      />
      <path
        className="cls-1"
        d="M16 8h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2l-2 3-3-3h-3a2 2 0 0 1-2-2h0"
      />
    </g>
  </svg>
)

export default ChatIcon
