import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img:
      'https://atorredecontrole.com.br/wp-content/uploads/2020/03/valorant_jett_duotoned.jpg',
    title: 'Valorant',
    subtitle: '<p>Play the new <strong>Riot</strong> fps',
    buttonLabel: 'Play Now!',
    buttonLink: '/'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
