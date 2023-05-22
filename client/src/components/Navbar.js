import React from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  // handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Rampart+One&family=Reem+Kufi+Ink&family=Julius+Sans+One&display=swap');

          .updatedlogo img {
            width: 500px; /* Adjust the width as needed */
            height: auto;
          }
        `}
      </style>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.palette.background.alt,
          backgroundImage: "url('https://i.postimg.cc/cLPSbmgy/bg2.gif')",
          backgroundSize: "cover",
          p: "1rem 2%", /* Adjust the horizontal padding as needed */
          mb: 2,
          boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h1"
          color="black"
          fontWeight="bold"
          style={{ fontFamily: "'Julius Sans One', sans-serif" }}
        >
          <div class="updatedlogo">
            <img src="https://i.postimg.cc/DyZSpf65/output-onlinegiftools.gif" alt="Logo" />
          </div>
        </Typography>

        <Typography
          variant="h2"
          color="SalmonPink"
          sx={{
            fontFamily: "'Amatic SC', cursive",
            fontWeight: "bold",
            fontSize: "1.5rem",
            lineHeight: "1.2",
            mt: "1rem",
            textAlign: "center",
          }}
        >
          <mark>
            Health&nbsp; is &nbsp;wealth, &nbsp;and &nbsp;we're &nbsp;here &nbsp;to&nbsp; help
            &nbsp;you &nbsp;get &nbsp;rich.
          </mark>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <NavLink
            to="/"
            sx={{ textDecoration: "none", color: theme.palette.text.primary, mr: 1 }}
          >
            <Button variant="contained" color="secondary">
              Home
            </Button>
          </NavLink>
          {loggedIn ? (
            <>
              <Button
                onClick={handleLogout}
                variant="contained"
                color="secondary"
                size="small"
                sx={{ ml: 1 }} /* Adjust the left margin as needed */
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink
                to="/register"
                sx={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                }}
                p={1}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{ ml: 1 }} /* Adjust the left margin as needed */
                >
                  Sign Up
                </Button>
              </NavLink>
              <NavLink
                to="/login"
                sx={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                }}
                p={1}
              >
                <Button variant="contained" color="secondary" size="small">
                  Sign In
                </Button>
              </NavLink>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
