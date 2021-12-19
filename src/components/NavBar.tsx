import {
  Box,
  HStack,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import Navlink from './NavLink'

export function Navbar() {

  return (
    <Box
      borderBottom='4px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.600')}
      mb={4}
    >
      <HStack py={4} maxW='container.lg' justifyContent='flex-end' mx='auto'>
        <Navlink to='/' name='Firbase Authentication' />
        <Spacer />
        <Navlink to='/login' name='Login' />
        <Navlink to='/register' name='Register' />
        <Navlink to='/profile' name='Profile' />
        <Navlink
          to='/logout'
          name='Logout'
          onClick={async e => {
            e.preventDefault()
            // handle logout
            alert('logout user')
          }}
        />
      </HStack>
    </Box>
  )
}