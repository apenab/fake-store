import { Box, Typography, Chip } from "@mui/material";

import { Rating } from "components";

export function ProductDetailsDescription({
  title,
  description,
  price,
  category,
  rating,
}) {
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Typography>{description}</Typography>
      <Chip label={category} size="small" />
      <Rating rate={rating?.rate} count={rating?.count} />
      <Typography variant="h6" mt={1}>
        ${price}
      </Typography>
    </Box>
  );
}
