import React, { Fragment } from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const SliderComponent = ({ min, max, defaultValue, step, onChange, value, label, unit, amount }) => {
  return (
    <Stack my={1.4}>
      {/*Fake dom*/}
      <Fragment>
        <Stack gap={1}>
          <Typography variant="subtitle2">{label}</Typography>
          <Typography variant="h5">{unit} {amount}</Typography>
        </Stack>
        <Slider defaultValue={defaultValue} min={min} max={max} step={step} onChange={onChange} value={value} marks aria-label="Default" valueLabelDisplay="auto" />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption" color="text.secondary">{unit} {min}</Typography>
          <Typography variant="caption" color="text.secondary">{unit} {max}</Typography>
        </Stack>
      </Fragment>
    </Stack>
  )
}

export default SliderComponent;