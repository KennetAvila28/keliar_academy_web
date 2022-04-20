/**
 * TODO: add the rules for inputs
 *
 */
import { FC } from 'react';
import { Form, Input, Checkbox, Button, Card } from 'antd';
import './login.css'
import logo from 'assets/img/logo.svg'
const login: FC = () => (
  <div className="bg">
    <div className="login-wrap">
      <Card>
        <header className="form-title-big">
          Keliar Academy
        </header>
        <p className="form-title-small">Welcome back, please login to access</p>
        <div className="flex-grid">
          <div className="left">
            <Form
              name="login-form"
            >
              <Form.Item
                name='userName'
              >
                <Input placeholder="Please enter your username" />
              </Form.Item>
              <Form.Item
                name='password'
              >
                <Input placeholder="Please enter your password" />
              </Form.Item>
              <Form.Item
                valuePropName='checked'
                name='rememberMe'
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item>
                <a className='link'>Forgot your password?</a>
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>Sign In</Button>
              </Form.Item>
            </Form>
          </div>
          <div className="right">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </Card>
    </div>
    <div className="bg-dark">
      Do you need accout? <a className='link'>Sign Up</a>
    </div>
  </div>
);


export default login;
