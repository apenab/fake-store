import { Breadcrumbs, Typography } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const breadcrumbNameMap = {
  "/product": "Product details",
};

export function HeaderBreadcrumbs() {
  const location = useLocation();
  const pathnames = location?.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" to="/">
        Products
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 2;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <Link underline="hover" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
