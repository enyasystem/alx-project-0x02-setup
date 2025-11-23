export interface User {
  id: number
  name: string
  username?: string
  email?: string
  address?: {
    street?: string
    suite?: string
    city?: string
    zipcode?: string
  }
}

export interface Post {
  id: number
  title: string
  body: string
  userId?: number
}

export interface CardProps {
  title: string
  content: string
}

import type { ReactNode } from 'react'

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  children?: ReactNode
}

export interface UserProps {
  id: number
  name: string
  email?: string
  address?: {
    street?: string
    suite?: string
    city?: string
    zipcode?: string
  }
}
