/**
 * Inline Style
 * タグの中にstyleを記載したobjectをあてる
 */
// styles object
// object記法とすること
const containerStyle = {
  border: "solid 2px #392eff",
  borderRadius: "20px",
  padding: "8px",
  margin: "8px",
  justifyContent: "space-around",
  alignItems: "center"
};
const titleStyle = {
  margin: 0,
  color: "#3d84a8"
};
const buttonStyle = {
  backgroundColor: "#abedd8",
  border: "none",
  padding: "8px",
  borderRadius: "8px"
};

export const InlineStyle = () => {
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Inline Style</p>
      <button style={buttonStyle}>頑張れ！！</button>
    </div>
  );
};
