import { FC } from 'react'

import { Layout, Typography } from 'antd'
const { Content } = Layout
const { Title } = Typography
const vision: FC = () => {
  return (
    <Content style={{ textAlign: 'center', marginTop: '2em' }}>
      <Title>Vision of Keliar Academy</Title>
      <article
        style={{ textAlign: 'unset', fontSize: '18px', margin: '2em' }}
        id='vision'
      >
        To be recognised as the leading Mexican educational platform that
        supports the transformation of the country&apos;s education system, to
        achieve a comprehensive, equitable and relevant education with the
        skills that students require today, that allows them to develop
        adequately in a society marked by accelerated technological
        transformation and that is used efficiently to get the most out of them.
      </article>
    </Content>
  )
}

export default vision
