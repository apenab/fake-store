import * as React from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useIsFetching, useQuery } from "react-query";

import { FAKE_USER_ID } from "constants";
import { QUERY_CONSTANTS } from "query";
import { HeaderBreadcrumbs } from "./header-breadcrumbs";

export function Header() {
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const { data } = useQuery(QUERY_CONSTANTS.GetUserCart(FAKE_USER_ID));

  const isFetching = useIsFetching();

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
    handleClose();
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: "white", textDecoration: "inherit" }}
            flexGrow={1}
          >
            {t("header.title").toUpperCase()}
          </Typography>
          <IconButton size="large" color="inherit">
            {data && data.length > 0 ? (
              <Badge badgeContent={data.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            ) : (
              <ShoppingCartIcon />
            )}
          </IconButton>
          <IconButton
            size="large"
            aria-label="change-language"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <TranslateIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              selected={i18n.language === "en"}
              onClick={() => handleChangeLanguage("en")}
            >
              English
            </MenuItem>
            <MenuItem
              selected={i18n.language === "es"}
              onClick={() => handleChangeLanguage("es")}
            >
              Español
            </MenuItem>
          </Menu>
        </Toolbar>
        <Toolbar
          disableGutters
          variant="dense"
          sx={{ backgroundColor: "white" }}
        >
          <Box ml={3}>
            <HeaderBreadcrumbs />
          </Box>
        </Toolbar>
        {!!isFetching && <LinearProgress />}
      </AppBar>
    </>
  );
}
