const IconContainer = ({ children }) => {
  return (
    <section
      style={{
        display: "flex",
        gap: "30px",
        padding: "10px 25px",
        backgroundColor: "#fafafa",
      }}
    >
      {children}
    </section>
  );
};

export default IconContainer;
