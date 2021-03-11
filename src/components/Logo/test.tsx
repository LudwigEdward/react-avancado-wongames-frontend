import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render black label when is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})

it('should render a bigger logo', () => {
  renderWithTheme(<Logo size="large" />)
  expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
    width: '20rem'
  })
})

it('should render a default logo size', () => {
  renderWithTheme(<Logo />)
  expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
    width: '11rem'
  })
})

it('should render a bigger logo without text if hideOnMobile', () => {
  renderWithTheme(<Logo hideOnMobile />)
  expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
    'width',
    '5.8rem',
    {
      media: '(max-width: 768px)'
    }
  )
})
