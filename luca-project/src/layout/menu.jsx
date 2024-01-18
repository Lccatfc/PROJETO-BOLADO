import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const rotas = [
  {
    path: "/",
    nome: "Home",
    icon: "iconamoon:home"
  },
  {
    path: "/Info",
    nome: "Info",
    icon: "material-symbols:info-outline"
  },
  {
    path: "/contato",
    nome: "Contato",
    icon: "ic:outline-phone"
  }
];

export const Menu = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#111",
          color: "#fff",
          mb: 6
        }}
      >
        <Toolbar>
          {rotas.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                mx: 3,
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center"
              }}
            >
              <a
                href={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Icon icon={item.icon} width={20} />
                <Typography> {item.nome}</Typography>
              </a>
            </Box>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
};
