import * as React from "react";
import { Search } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Box,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Skeleton,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import { QUERY_CONSTANTS } from "query";
import { ProductItem } from "./product-item";

export function ProductList() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const { t } = useTranslation();

  const { data, isSuccess, isLoading, isError } = useQuery(
    QUERY_CONSTANTS.GetAllProducts
  );

  const products = isSuccess
    ? data.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <Box>
      <Box mb={2} display="flex" justifyContent="flex-end">
        <FormControl variant="outlined">
          <OutlinedInput
            id="search-product"
            onChange={(e) => setSearchTerm(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      {isError && (
        <Alert severity="error">
          <AlertTitle>{t("error").toUpperCase()}</AlertTitle>
          {t("product_list.error").toUpperCase()}
        </Alert>
      )}

      {isSuccess && searchTerm && !products.length && (
        <Typography
          variant="overline"
          align="center"
          display="flex"
          justifyContent="center"
        >
          {t("product_list.no_results").toUpperCase()}: "{searchTerm}""
        </Typography>
      )}

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        {isLoading &&
          Array.from(Array(20)).map((_, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <Skeleton>
                <ProductItem />
              </Skeleton>
            </Grid>
          ))}

        {isSuccess &&
          products.map((product) => (
            <Grid item xs={2} sm={4} md={3} key={product.id}>
              <ProductItem {...product} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
