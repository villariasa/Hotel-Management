/* eslint-disable prettier/prettier */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Add transition effect
    const card = document.getElementById("sign-up-card");
    card.style.transition = "all 0.5s ease-in-out";
    card.style.transform = "scale(0.95)";
    card.style.opacity = "0";

    setTimeout(() => {
      navigate("/authentication/google-otp");
    }, 500); // Duration of the transition
  };

  const handleSignIn = () => {
    // Add transition effect with slide out, rotate, and scale
    const card = document.getElementById("sign-up-card");
    card.style.transition = "transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.6s ease";
    card.style.transform = "translateX(-100vw) rotate(-10deg) scale(0.8)";
    card.style.opacity = "0";

    setTimeout(() => {
      navigate("/authentication/sign-in");
    }, 600); // Duration of the transition
  };

  const handleHome = () => {
    navigate("/dashboard");
  };

  return (
    <CoverLayout image={bgImage}>
      <MDBox display="flex" justifyContent="flex-start" mb={2} position="absolute" top={20} left={20}>
        <MDButton variant="outlined" color="info" onClick={handleHome}>
          <Icon>home</Icon>&nbsp;Home
        </MDButton>
      </MDBox>
      <Card id="sign-up-card" sx={{ transition: "all 0.5s ease-in-out" }}>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          Your Next Stay Awaits!
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
          Sign up to explore exclusive deals and make your reservations hassle-free!
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Address" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="date" label="Birthdate" InputLabelProps={{ shrink: true }} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Contact No" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={handleSignUp}
              >
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component="span"
                  onClick={handleSignIn}
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                  sx={{ cursor: "pointer" }}
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
