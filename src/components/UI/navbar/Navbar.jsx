import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Container,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = [
    {
      id: 1,
      name: "Posts",
      link: "/posts",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
  ];
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <div className="menu_wrapper">
          <Link to="/">
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Link>

          <div className="menu">
            {pages.map((page) => (
              <Link to={page.link} key={page.name}>{page.name}</Link>
            ))}
          </div>
        </div>
      </Container>
    </AppBar>
  );
};

export default Navbar;
