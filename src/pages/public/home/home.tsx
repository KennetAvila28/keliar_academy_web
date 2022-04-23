import { FC } from 'react';
import Header from './components/header/header';
import { Layout } from 'antd';
import Vision from './components/vision/vision';
import Mision from './components/mision/mision';
import Footer from './components/footer/footer';
import Ours from './components/ours/ours';
const { Content } = Layout;
const home: FC = () => {
  return (

    <Layout style={{backgroundColor: 'white'}}>
      <Header/>
      <Layout style={{ padding: '0 24px 24px', height: '100%' }}>
        <Content style={{ backgroundColor: 'white', overflow: 'initial', margin: '24px 16px 0' }}>
          <div>
            <Ours></Ours>
            <br />
            <Mision></Mision>
            <br />
            <Vision></Vision>
            <br />
          </div>
        </Content>
        <Footer/>
      </Layout>
    </Layout>

  )
}

export default home
