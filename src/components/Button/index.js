function Button({ text, color, backgroundColor, width, height, fontSize }) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        border: "none",
        borderRadius: "50px",
        fontSize: fontSize,
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
