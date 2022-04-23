import { FC } from 'react'

import { Layout, Typography } from 'antd'
const { Content } = Layout
const { Title } = Typography
const ours: FC = () => {
  return (
    <Content style={{ textAlign: 'center', marginTop: '2em'}}>
      <Title> Keliar Academy</Title>
      <article style={{textAlign: 'unset', fontSize: '18px', margin: '2em'}} id='vision'>
        We are a proudly Mexican online educational platform, autonomous and unique. We were born in 2022, thanks to the confluence
        of educational sites but with a big difference being the only ones to implement certain functions that will make this one of the best experiences for both students and teachers.
        Our purpose is to connect the current educational demands with an active teaching-learning process and an updated professional development for teachers, which allows students to
        feel involved and committed to their own education, developing meaningful learning that they will deploy throughout their lives to contribute to the development of their community
        and society as people and full citizens by introducing new technologies in everyday life.
      </article>
    </Content>
  )
}

export default ours
