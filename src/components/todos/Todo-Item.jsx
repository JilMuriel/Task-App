import React from "react";
import { Box, Grid, FormControlLabel, Checkbox } from "@material-ui/core";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

export const TodoItem = ({ title, priority, start, due, ...props }) => (
  <Grid container {...props}>
    <Grid item sm={3}>
      <Box display="flex" alignItems="center">
        <DragIndicatorIcon color="secondary" />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={title}
        />
      </Box>
    </Grid>
    <Grid item sm={3}>
      <Box textAlign="right">{priority}</Box>
    </Grid>
    <Grid item sm={3}>
      <Box textAlign="right">{start}</Box>
    </Grid>
    <Grid item sm={3}>
      <Box textAlign="right">{due}</Box>
    </Grid>
  </Grid>
);

export default TodoItem;
