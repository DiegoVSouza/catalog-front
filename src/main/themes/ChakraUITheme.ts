import { BoxProps, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      light: "#C2202A",
      dark: "#b71f29",
    },
    secondary: {
      light: "#F7A406",
      dark: "#F7A406",
    },
    background: {
      light: "#fff",
      dark: "#32333d",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        fontSize: "1rem",
        margin: "0",
        transition: "background-color 0.25s",
        // backgroundColor: props.colorMode === "light" ? "background.light" : "background.dark",
        color: props.colorMode === "light" ? "gray.800" : "gray.100",
      },
      button:{
        backgroundColor: props.colorMode === "light" ? "background.light" : "background.dark",
      }
    }),
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  breakpoints: {
    base: "0px", 
    sm: "480px", 
    md: "768px", 
    lg: "992px", 
    xl: "1280px", 
    "2xl": "1536px", 
    "3xl": "1600px",
    "4xl": "1920px",
    "5xl": "2560px"
  },
  components: {
    Box: {
      baseStyle: (props:{ colorMode: string; size: "base" | "sm" | "md" | "lg" | "xl" | "2xl"; isDark: boolean } ) => {
        // Define the font size based on the screen size
        
        const fontSize = {
          base: "1rem",
          sm: "0.875rem",
          md: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
        }[props.size || "base"];

        // Define the margin based on the screen size
        const margin = {
          base: "1rem",
          sm: "0.5rem",
          md: "1rem",
          lg: "1.5rem",
          xl: "2rem",
          "2xl": "2rem",
        }[props?.size || "base"];

        return {
          fontSize: props.isDark ? "1.2rem" : "1rem",
        //   color: props.colorMode === "light" ? "primary.light" : "primary.dark",
          bgColor: props.colorMode === "light" ? "background.light" : "background.dark",
          margin: margin,
          padding: "1rem",
          borderWidth: "1px",
          borderColor: "gray.300",
          borderRadius: "md",
          transition: "background-color 0.25s",
        };
      },
    },
    Text: {
      baseStyle: {
        fontSize: "sm",
      },
    },
   
    Heading: {
      baseStyle: {
        fontSize: {
          xs: "2xl",
          sm: "3xl",
          md: "4xl",
          lg: "5xl",
          xl: "6xl",
        },
      },
    },
  },
});

export default theme;