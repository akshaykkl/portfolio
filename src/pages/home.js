// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "@mui/material/styles";
// import { useMediaQuery } from "@mui/material";
// import { useAuth } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { useSnackbar } from "notistack";

// const HomePage = () => {
//   const { t } = useTranslation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     if (!user) {
//       enqueueSnackbar(t("home.notLoggedIn"), { variant: "warning" });
//       navigate("/login");
//     }
//   }, [user, enqueueSnackbar, navigate, t]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>{t("home.welcome")}</h1>
//       <p>{t("home.description")}</p>
//       <Button
//         variant="contained"
//         color="primary"
//         component={Link}
//         to="/about"
//       >
//         {t("home.goToAbout")}
//       </Button>
//     </div>
//   );
// }