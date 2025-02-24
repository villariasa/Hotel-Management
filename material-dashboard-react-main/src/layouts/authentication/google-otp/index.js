/* eslint-disable prettier/prettier */
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
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

function GoogleOTP() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    const value = element.value;

    if (!/^[0-9]?$/.test(value)) return; // Allow only numeric input or empty

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input automatically
    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Move to the previous input on backspace
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (event.key === "ArrowRight" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackToSignIn = () => {
    const card = document.getElementById("otp-card");
    card.style.transition = "transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.6s ease";
    card.style.transform = "translateY(-100vh) rotate(-10deg) scale(0.8)";
    card.style.opacity = "0";

    setTimeout(() => {
      navigate("/authentication/sign-in");
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
        id="otp-card"
        sx={{
          transition: "transform 0.5s ease-in-out, opacity 0.5s ease",
          transformOrigin: "top",
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
            Enter OTP
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox display="flex" justifyContent="center" gap={2} mb={2}>
              {otp.map((data, index) => (
                <MDInput
                  key={index}
                  type="text"
                  inputProps={{
                    maxLength: 1,
                    style: {
                      textAlign: "center",
                      fontSize: "1.5rem",
                      width: "3rem",
                      height: "3rem",
                    },
                  }}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  inputRef={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                Verify OTP
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                <span
                  onClick={handleBackToSignIn}
                  style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
                >
                  Back to Sign In
                </span>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default GoogleOTP;
