import React from 'react'
import { NavLink as Link, useLocation } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { FC } from "React"

interface IProps {
  to: string
  name: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Navlink({ to, name, ...rest } : IProps) {
  const location = useLocation()

  const isActive = location.pathname === to

  return (
    <Link to={to}>
      <Button
        as='a'
        variant={isActive ? 'outline' : 'ghost'}
        colorScheme={isActive ? 'primary' : 'gray'}
        {...rest}
      >
        {name}
      </Button>
    </Link>
  )
}
