const aboutTheme=(theme)=>({

  container: {
    padding: "50px 10%",
     marginTop:"100px",
     marginBottom: "35px",
    textAlign:"center",
  },

  description: {
      maxWidth: "700px",
    margin:"20px auto",
    color: theme.palette.quaternary.main,

  },

  featuresContainer: {
    maxWidth: "700px",
    margin:"30px auto",
  },

  feature: {
  backgroundColor:"white",
    border:`1px solid ${theme.palette.secondary.main}`,
  borderRadius:"7px",
    padding: "15px",
    marginBottom:"12px",
  },
 });



export default aboutTheme;