import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import AppCard from '../AppComponents/AppCard'
import AppCardSmall from '../AppComponents/AppCardSmall'

function AppBarMain() {
  return (
    <Box>
        <AppCardSmall />
        <Text>Ini Halaman Main</Text>
    </Box>
  )
}

export default AppBarMain