const ExpandSVG = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
  >
    <path fill="none" d="M0 0h16v16H0z" />
    <path d="M16 16H0V0h16v16zM4 2v12h10V2H4zm1.586 3.414L8.172 8l-2.586 2.586L7 12l4-4-4-4-1.414 1.414z" />
  </svg>
)

export default ExpandSVG
