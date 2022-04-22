import { FC } from 'react'
import { Layout, Menu } from 'antd'
const { Header } = Layout
import logo from 'assets/img/logo.png'
import './header.css'
const header: FC = () => {
  return (
    <Header>
      <div className="logo">
        <img src={logo} alt="logo" width={80}/>
      </div>
      <Menu
        theme="dark"
        mode="horizontal">
        <Menu.Item style={{ fontSize: 24}} >Keliar Academy</Menu.Item>
        <Menu.Item key="1" style={{ fontSize: 20}} >Blog</Menu.Item>
        <Menu.Item key="2" style={{ fontSize: 20}} >Team</Menu.Item>
        <Menu.Item key="3" style={{ fontSize: 20}} >Explore</Menu.Item>
      </Menu>
    </Header>
  )
}

export default header
