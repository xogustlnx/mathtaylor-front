'use client'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const LoginHeadBlock = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  background-color: #d9d9d9;
  width: 100%;
  height: 80px;
`

const LoginHeadLoginBtn = styled(Button)``

const LoginHeadSignUpBtn = styled.div``

export default function LoginHead() {
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return <>{mounted && <LoginHeadBlock></LoginHeadBlock>}</>
}
