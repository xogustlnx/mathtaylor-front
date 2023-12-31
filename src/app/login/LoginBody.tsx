'use client'

import Button from '@mui/material/Button'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'

const LoginBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const LoginBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  max-width: 1000px;
  padding: 0 16px;
`
const LoginBtnContainer = styled.div``

export default function LoginBody() {
  return (
    <>
      <LoginBodyBox>
        <LoginBodyContainer>
          <h1>로그인</h1>
          <TextField required id="outlined-required" label="Email" />
          <TextField
            required
            id="outlined-required"
            label="Password"
            sx={{ my: 2 }}
          />
          <LoginBtnContainer>
            <Button variant="contained">LOGIN</Button>
          </LoginBtnContainer>
        </LoginBodyContainer>
      </LoginBodyBox>
    </>
  )
}
