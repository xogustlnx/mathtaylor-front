'use client'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const SignUpHeadBlock = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #d9d9d9;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
const SignUpHeadContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  justify-content: flex-end;
  align-items: center;
`

export default function SignUpHead() {
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <SignUpHeadBlock>
          <SignUpHeadContainer>
            <Button sx={{ ml: 2 }} variant="contained">
              <Link href="/login">Login</Link>
            </Button>

            <Button sx={{ m: 2 }} variant="contained" disabled>
              SIGN UP
            </Button>
          </SignUpHeadContainer>
        </SignUpHeadBlock>
      )}
    </>
  )
}
