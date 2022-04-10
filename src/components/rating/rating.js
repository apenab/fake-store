import { Box, Rating as MUIRating } from "@mui/material";

export function Rating({ rate, count }) {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        mt: 2,
      }}
    >
      <MUIRating name="rating" value={rate} readOnly />
      <Box sx={{ ml: 2 }}>{count}</Box>
    </Box>
  );
}
