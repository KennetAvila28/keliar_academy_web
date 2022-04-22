// import {useNavigate} from 'react-router-dom';
import { Button, Result } from 'antd'
import { FC } from 'react'

export const NotFound: FC = () => {
  // const navigate = useNavigate();
  const handleRedirect = () => {
    // navigate("/usuarios")
  }
  return (
    <Result
      status='404'
      title='404'
      subTitle='Perdón, la página que visito no existe.'
      extra={
        <Button
          onClick={() => {
            handleRedirect()
          }}
          type='primary'
        >
          Regresar
        </Button>
      }
    />
  )
}
