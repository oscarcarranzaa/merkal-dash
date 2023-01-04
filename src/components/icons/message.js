const MessageSVG = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#000"
      strokeWidth={2}
      d="M12 21a9 9 0 1 0-7.403-3.88c.105.15.126.345.048.512l-1.218 2.62a.5.5 0 0 0 .435.748H12z"
    />
    <path
      fill="#000"
      stroke="#000"
      d="M8 13.15a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3zm8 0a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3zm-4 0a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3z"
    />
  </svg>
)

export default MessageSVG
