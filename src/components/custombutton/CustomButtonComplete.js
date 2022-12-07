function CustomButtonComplete(props) {
  const { color, onClick, children, gap } = props;
  if (color) {
    return (
      <button
        style={{
          width: "100px",
          height: "40px",
          backgroundColor: color,
          color: "black",
          borderRadius: "8px",
          border: "2px solid green",
          cursor: "pointer",
          gap: gap,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onclick}>{children}</button>;
}

export default CustomButtonComplete;
