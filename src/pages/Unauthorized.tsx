import {Result} from 'antd';
import {FC} from 'react';

export const Unauthorized:FC=() => {
  return (
    <div className='grid_content'>
      <Result
        status='403'
        title='No autorizado'
        subTitle='Usted no esta autorizado para ver esta sección'
      />
    </div>
  );
};
