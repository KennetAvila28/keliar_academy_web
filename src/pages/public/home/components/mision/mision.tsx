import { FC } from 'react'

import { Layout, Typography } from 'antd'
const { Content } = Layout
const { Title } = Typography
const mision: FC = () => {
  return (
    <Content style={{ textAlign: 'center', marginTop: '2em'}}>
      <Title>Mision of Keliar Academy</Title>
      <article style={{textAlign: 'unset', fontSize: '18px', margin: '2em'}} id='vision'>
        To take advantage of virtual spaces and new technologies to create and make available new responses to the emerging challenges
        of education and society in the 21st century, providing a space for the educational community to support, meet and collaborate,
        in order to promote comprehensive, equitable and quality education.
      </article>
    </Content>
  )
}

export default mision
