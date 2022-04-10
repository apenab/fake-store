import * as React from "react";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";

import { API_URL, QUERY_CONSTANTS } from "query";
import { FAKE_USER_ID } from "constants";

export function ProductDetailsActions({ id }) {
  const [quantity, setQuantity] = React.useState(1);

  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (data) => axios.post(`${API_URL}/carts`, data).then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.refetchQueries(QUERY_CONSTANTS.GetUserCart(FAKE_USER_ID));
      },
    }
  );

  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={1} mb={1}>
        <IconButton
          aria-label="remove-products"
          disabled={quantity === 1}
          onClick={() => setQuantity(quantity - 1)}
        >
          <RemoveIcon />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton
          aria-label="add-products"
          onClick={() => setQuantity(quantity + 1)}
        >
          <AddIcon />
        </IconButton>
      </Stack>
      <Button
        variant="contained"
        disabled={isLoading}
        startIcon={<AddShoppingCartIcon />}
        onClick={() =>
          mutate({
            userId: FAKE_USER_ID,
            date: new Date(),
            products: [{ productId: id, quantity }],
          })
        }
      >
        {t("product_details.add_to_cart")}
      </Button>
    </Box>
  );
}
