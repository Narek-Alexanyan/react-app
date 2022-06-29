import React from "react";
import RPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Pagination = ({ count, page, handleChange }) => {
  return (
    <Stack spacing={2}>
      <RPagination count={count} page={page} onChange={handleChange} variant="outlined" color="primary" />
    </Stack>
  );
};

export default Pagination;
