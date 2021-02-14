import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const rootElement = screen.getByText(/123/i)
  expect(rootElement).toBeInTheDocument()
})
