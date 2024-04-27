'use client'

import { Box, Container, Grid, Paper, Text } from '@mantine/core'
import styles from './Groups.module.css'

import React from 'react'

export function Groups() {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} mt="3.5rem">
      {/* <Container px="1rem" mt="-3rem"> */}
      <Grid.Col bg="red.5" span={4}>
        <Paper shadow="xs">
          <Text>Groups 1</Text>
        </Paper>
      </Grid.Col>
      <Grid.Col bg="green.5" span={4}>
        <h1>Groups 2</h1>
      </Grid.Col>
      <Grid.Col bg="blue.5" span={4}>
        <h1>Groups 3</h1>
      </Grid.Col>
      {/* Groups */}
      {/* </Container> */}
    </Grid>
  )
}
