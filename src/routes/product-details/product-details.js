import { Alert, Box, Stack } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { QUERY_CONSTANTS } from "query";
import { ProductDetailsDescription, ProductDetailsActions } from "./index";

export function ProductDetails() {
  const params = useParams();

  const { t } = useTranslation();

  const { status, data: product } = useQuery(
    QUERY_CONSTANTS.GetSingleProduct(params.productId)
  );

  // TODO: create a better loading indicator
  switch (status) {
    case "success":
      return (
        <Box>
          <Stack direction={{ xs: "column", md: "row" }} spacing={8}>
            <div style={{ display: "inline-table" }}>
              <img
                style={{ maxWidth: "100%", maxHeight: "50%" }}
                src={product.image}
                alt={product.title}
              />
            </div>
            <Box flexBasis="150%">
              <Stack direction="column" spacing={2}>
                <ProductDetailsDescription {...product} />
                <ProductDetailsActions {...product} />
              </Stack>
            </Box>
          </Stack>
        </Box>
      );
    case "error":
      return <Alert severity="error">{t("product_details.error")}</Alert>;
    default:
      return null;
  }
}
