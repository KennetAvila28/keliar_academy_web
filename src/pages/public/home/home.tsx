import { FC } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { Layout } from 'antd';
const { Content } = Layout;
const home: FC = () => {
  return (
    <Layout>
      <Header></Header>
      <Content style={{backgroundColor: 'transparent'}}>
        My Home Page
      </Content>
      <Footer />
    </Layout>

  )
}

export default home
