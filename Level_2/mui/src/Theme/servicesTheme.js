

const serviceTheme= (theme)=> ({
    container: {
         padding: "50px 10%",
        textAlign: "center",
    },
     heading: {
    marginBottom: "30px",
    fontWeight: theme.typography.customFontWeight.bold,
  },

  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
});

export default serviceTheme; 

