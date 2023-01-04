const PieChartSVG = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#000"
      strokeWidth="2"
      d="M11 6c0-.552-.45-1.006-.997-.938a8 8 0 1 0 8.935 8.935C19.006 13.45 18.552 13 18 13h-6a1 1 0 0 1-1-1V6z"
    />
    <path
      stroke="#000"
      strokeWidth="2"
      d="M14 4c0-.552.45-1.007.997-.929a7 7 0 0 1 5.932 5.932c.078.547-.377.997-.929.997h-5.9a.1.1 0 0 1-.1-.1V4z"
    />
  </svg>
)

export default PieChartSVG
