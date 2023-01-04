const UserSVG = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle cx={12} cy={7} r={4} stroke="#000" />
    <path
      stroke="#000"
      d="M15 14H9c-2.762 0-5.235 2.55-3.418 4.629C6.818 20.043 8.862 21 12 21c3.138 0 5.181-.957 6.417-2.371C20.235 16.549 17.761 14 15 14z"
    />
  </svg>
)

export default UserSVG
