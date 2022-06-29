import React from "react";
import Rskeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Skeleton = () => {
  return (
    <Stack spacing={1}>
      <Rskeleton variant="text" />
      <Rskeleton variant="circular" width={40} height={40} />
      <Rskeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
};

export default Skeleton;
