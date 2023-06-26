import React from 'react'
import { Stack } from '@mui/material'
import {InfinitySpin} from 'react-loader-spinner'
const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" widtt="100%">
      <InfinitySpin color="white" />
    </Stack>
  )
}

export default Loader