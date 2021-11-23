export const Title = ({ children, style, weight = "regular", color, onClick }) => (
  <h3 onClick={onClick} style={[weights[weight], { color }, style]}>
    {children}
  </h3>
);
