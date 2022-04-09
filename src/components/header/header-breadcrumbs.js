import { Breadcrumbs, Typography } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const breadcrumbNameMap = {
  "/product": "Product details",
};

export function HeaderBreadcrumbs() {
  const location = useLocation();
  const pathnames = location?.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white" }}>
      <Link underline="hover" color="inherit" to="/" style={{ color: "white" }}>
        Products
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 2;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to} sx={{ color: "white" }}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <Link
            underline="hover"
            style={{ color: "white" }}
            color="inherit"
            to={to}
            key={to}
          >
            {breadcrumbNameMap[to]}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
