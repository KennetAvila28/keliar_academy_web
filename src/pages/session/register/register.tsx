import { Button, Card, Col, Form, Input, Row } from 'antd';
import { FC } from 'react';
import './register.css';
const register: FC = () => {
  // TODO: Add valitation with useState and useEffect to check if the user is already registered
  // TODO: Add rule with useState to check the fields
  return (
    <div className="bg">
      <div className="login-wrap">
        <Card>
          <header className="form-title-big">Keliar Academy</header >
          <p className="form-title-small">
            <span>Register</span>
          </p>
          <div className="flex-grid">
            <div className="left">
              <Form name="login-form"
                layout='vertical'
                requiredMark={true}
                wrapperCol={{ span: 22 }}
                labelWrap={true}
                autoComplete="off"
                scrollToFirstError={true}

              >
                <Row >
                  <Col >
                    <Form.Item name="names" label="First name" required>
                      <Input placeholder="Please enter your names" type={'text'}/>
                    </Form.Item>
                  </Col>
                  <Col >
                    <Form.Item name="lastNames" label="Last name" required >
                      <Input placeholder="Please enter your names" type={'text'}/>
                    </Form.Item>
                  </Col>
                  {
                    // TODO: Change to component with dropdown the prefix and country https://codepen.io/pen?&editors=001
                  }
                  <Col>
                    <Form.Item name="phone" label='Phone'>
                      <Input placeholder="Please enter your phone" type={'tel'}/>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Item name="email" required label='E-mail'>
                      <Input placeholder="Please enter your e-mail" type={'email'}/>
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item name="password" required label='Password'>
                      <Input placeholder="Please enter your password" type={'password'}/>
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item name="passwordConfirm" required label='Confirm your password'>
                      <Input placeholder="Please reenter your password" type={'password'}/>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                                        Sign up
                  </Button>
                </Form.Item>
              </Form>
            </div>

          </div>
        </Card>
      </div>
      <div className="bg-dark">
        Do you have accout? <a className="link">Sign In</a>
      </div>
    </div>
  );
};

export default register;
