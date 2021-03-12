import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img:
    'https://atorredecontrole.com.br/wp-content/uploads/2020/03/valorant_jett_duotoned.jpg',
  title: 'Valorant',
  subtitle: '<p>Play the new <strong>Riot</strong> fps',
  buttonLabel: 'Play Now!',
  buttonLink: '/'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Valorant/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new Riot fps/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Valorant/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
