import { FC } from 'react'
import { Avatar, Card, Col, Row, Typography } from 'antd'
import { creators } from './creators'
import { Content } from 'antd/lib/layout/layout'
import useWindowDimensions from 'hooks/useWindowDimesions'
const { Title } = Typography
const team: FC = () => {
  const { width } = useWindowDimensions()

  return (
    <Content style={{ marginTop: '3em' }}>
      <div style={{ textAlign: 'center' }}>
        <Title>Team</Title>
        <Row>
          {creators.map(({ image, name, job }, index) => {
            return width! > 510 ? (
              <Col span={8} key={index}>
                <Card
                  style={{
                    margin: '50px',
                    marginTop: '10px',
                  }}
                  title={width! > 750 ? name : null}
                  bordered={false}
                >
                  <Avatar
                    src={image}
                    alt='creator profile'
                    size={width! > 750 ? 150 : 64}
                  />
                  <p
                    style={{
                      marginTop: '10px',
                      fontSize: width! > 750 ? '18px' : '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    {job}
                  </p>
                </Card>
              </Col>
            ) : (
              <Row key={index} style={{ textAlign: 'center' }}>
                <Card
                  style={{
                    margin: '50px',
                    marginTop: '10px',
                  }}
                  title={width! > 750 ? name : null}
                  bordered={false}
                >
                  <Avatar src={image} alt='creator profile' size={150} />
                  <p
                    style={{
                      marginTop: '10px',
                      fontSize: '32px',
                      fontWeight: 'bold',
                    }}
                  >
                    {job}
                  </p>
                </Card>
              </Row>
            )
          })}
        </Row>
      </div>
    </Content>
  )
}

export default team
