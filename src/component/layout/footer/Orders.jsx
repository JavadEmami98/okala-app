import { Typography } from '@mui/material'
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import React from 'react'

function Orders() {
  return (
    <div>
          <AssignmentOutlinedIcon />
            <Typography sx={{ fontSize: "14px !important", mt: "4px" }}>
              سفارش ها
            </Typography>
    </div>
  )
}

export default Orders