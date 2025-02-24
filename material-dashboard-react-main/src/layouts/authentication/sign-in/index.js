/* eslint-disable prettier/prettier */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSignIn = () => {
    // Add transition effect with slide out, rotate, and scale
    const card = document.getElementById("sign-in-card");
    card.style.transition = "transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.6s ease";
    card.style.transform = "translateX(-100vw) rotate(-10deg) scale(0.8)";
    card.style.opacity = "0";

    setTimeout(() => {
      navigate("/authentication/google-otp");
    }, 600); // Duration of the transition
  };

  const handleSignUp = () => {
    // Add transition effect with slide out, rotate, and scale
    const card = document.getElementById("sign-in-card");
    card.style.transition = "transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.6s ease";
    card.style.transform = "translateX(100vw) rotate(10deg) scale(0.8)";
    card.style.opacity = "0";

    setTimeout(() => {
      navigate("/authentication/sign-up");
    }, 600); // Duration of the transition
  };

  const handleHome = () => {
    navigate("/dashboard");
  };

  return (
    <BasicLayout image={bgImage}>
      <MDBox display="flex" justifyContent="flex-start" mb={2} position="absolute" top={20} left={20}>
        <MDButton variant="outlined" color="info" onClick={handleHome}>
          <Icon>home</Icon>&nbsp;Home
        </MDButton>
      </MDBox>
      <Card
        id="sign-in-card"
        sx={{
          transition: "transform 0.5s ease-in-out, opacity 0.5s ease",
          transformOrigin: "left",
        }}
      >
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component="span"
                  onClick={handleSignUp}
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                  sx={{ cursor: "pointer" }}
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
