'use client'
import { Button, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <Grid container height='100vh' alignItems='center' justifyContent='center' direction='column'>
      <Typography variant='h1' component='h1' gutterBottom>
        MTG Group
      </Typography>
      <Image src='/mtg.jpeg' alt='MTG Logo' width={200} height={200} />
    </Grid>
  )
}
