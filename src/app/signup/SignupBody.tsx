'use client'

import Button from '@mui/material/Button'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'

const SignUpBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const SignUpBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  max-width: 1000px;
  padding: 0 16px;
`
const SignUpBtnContainer = styled.div``

export default function SignUpBody() {
  return (
    <>
      <SignUpBodyBox>
        <SignUpBodyContainer>
          <h1>회원가입</h1>
          <TextField required id="outlined-required" label="Email" />
          <TextField
            required
            id="outlined-required"
            label="Password"
            sx={{ mt: 2 }}
          />
          <TextField
            required
            id="outlined-required"
            label="Password 확인"
            sx={{ my: 2 }}
          />
          <SignUpBtnContainer>
            <Button variant="contained">SIGN UP</Button>
          </SignUpBtnContainer>
        </SignUpBodyContainer>
      </SignUpBodyBox>
    </>
  )
}
