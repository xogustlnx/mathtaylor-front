'use client'

import Button from '@mui/material/Button'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

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
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const login = async (e: any) => {

    e.preventDefault()
    const response = await signIn('credentials', {
      username: email,
      password: pwd,
      redirect: true,
      callbackUrl: '/',
    })
    console.log(response)
  }

  return (
    <>
      <LoginBodyBox>
        <LoginBodyContainer>
          <h1>로그인</h1>
          <TextField
            required
            label="Email"
            id="email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            name="password"
            label="Password"
            type={'password'}
            sx={{ my: 2 }}
            onChange={(e) => setPwd(e.target.value)}
          />
          <LoginBtnContainer>
            <Button variant="contained" onClick={login}>
              LOGIN
            </Button>
          </LoginBtnContainer>
        </LoginBodyContainer>
      </LoginBodyBox>
    </>
  )
}
