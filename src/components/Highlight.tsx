const Highlight = ({ children, color }) => (
  <span
    style={{
      backgroundColor: "#2C6F63",
      borderRadius: "2px",
      border: "1px solid black",
      color: "#fff",
      padding: "0.2rem",
    }}
  >
    {children}
  </span>
);

export default Highlight;
