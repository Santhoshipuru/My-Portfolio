import React from "react";
import { Container, Typography, Stack, Chip } from "@mui/material";
import data from "../data";

export default function Coursework() {
  return (
    <Container sx={{ py: 6, maxWidth: 1100 }}>
      <Typography variant="h6" gutterBottom>Relevant Coursework</Typography>
      <Stack direction="row" gap={1} flexWrap="wrap">
        {data.coursework.map((c) => <Chip key={c} label={c} color="secondary" variant="outlined" />)}
      </Stack>
    </Container>
  );
}
