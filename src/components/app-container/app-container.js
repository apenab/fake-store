import { Box, Container } from "@mui/material";

export function AppContainer(props) {
  return (
    <Box my={2}>
      <Container maxWidth="lg">{props.children}</Container>
    </Box>
  );
}
