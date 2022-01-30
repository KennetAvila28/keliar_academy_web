import { Result } from 'antd'

export default function Unauthorized() {
  return (
    <div className='grid_content'>
      <Result
        status='403'
        title='No autorizado'
        subTitle='Usted no esta autorizado para ver esta sección'
      />
    </div>
  )
}
