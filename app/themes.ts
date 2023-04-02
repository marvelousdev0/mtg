'use client'
import { createTheme } from '@mui/material/styles'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const lightTheme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontWeight: 900,
    },
  },
})
