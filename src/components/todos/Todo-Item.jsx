import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Box, Grid, FormControlLabel, Checkbox } from "@material-ui/core";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import InputBase from "@material-ui/core/InputBase";

export const TodoItem = ({ title, priority, start, due, ...props }) => (
  <Grid container {...props}>
    <Grid item sm={4}>
      <Box display="flex" alignItems="center">
        <DragIndicatorIcon color="secondary" />
        <FormControlLabel control={<Checkbox color="primary" />} />
        <InputBase
          defaultValue={title}
          inputProps={{ "aria-label": "naked" }}
          fullWidth
        />
      </Box>
    </Grid>
    <Grid item sm={2}>
      <Box textAlign="right">{priority}</Box>
    </Grid>
    <Grid item sm={3}>
      <Box textAlign="right">
        <DatePicker />
      </Box>
    </Grid>
    <Grid item sm={3}>
      <Box textAlign="right">
        <DatePicker />
      </Box>
    </Grid>
  </Grid>
);

export default TodoItem;
