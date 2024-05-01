function Button({
  text,
  color,
  backgroundColor,
  width,
  height,
  fontSize,
  onClick,
  borderColor,
}) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        border: `1px solid ${borderColor}`,
        borderRadius: "50px",
        fontSize: fontSize,
        fontWeight: "bold",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
