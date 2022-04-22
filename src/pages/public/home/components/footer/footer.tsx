import { Divider, Layout } from 'antd'
import { FC } from 'react'
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaTwitch,
  FaUserFriends,
  FaWpexplorer,
  FaBloggerB,
} from 'react-icons/fa';
const { Footer } = Layout
import './footer.css'
const footer: FC = () => {
  return (
    <Footer className='footer'>
      <div>
        <Divider type="vertical" >
          <h3 className='title'>Social Networks</h3>
          <FaFacebook size={30} className='socialLogo' />
          <FaGithub size={30} className='socialLogo'/>
          <FaTwitter size={30} className='socialLogo'/>
          <FaTwitch size={30} className='socialLogo' />
          <Divider type="vertical" />
        </Divider>
        <Divider type="vertical" >
          <h3 className='option'> <FaUserFriends size={13}/> Team</h3>
          <h3 className='option'> <FaBloggerB size={13}/> Blog</h3>
          <h3 className='option'> <FaWpexplorer size={13}/> Explore</h3>
        </Divider>
        <Divider type="vertical" >
          <h3 className='option'> <FaUserFriends size={13}/> Team</h3>
          <h3 className='option'> <FaBloggerB size={13}/> Blog</h3>
          <h3 className='option'> <FaWpexplorer size={13}/> Explore</h3>
        </Divider>
        <Divider type="vertical" >
          <h3 className='option'> <FaUserFriends size={13}/> Team</h3>
          <h3 className='option'> <FaBloggerB size={13}/> Blog</h3>
          <h3 className='option'> <FaWpexplorer size={13}/> Explore</h3>
        </Divider>
      </div>

    </Footer>
  )
}

export default footer
