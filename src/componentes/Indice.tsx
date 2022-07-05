import { FunctionComponent } from 'react';
import './Indice.css';

type Props = {
  percentual: number;
  corFundo: string;
  corPercentual: string;
};

const Indice: FunctionComponent<Props> = function (props) {
  return (
    <div className='Indice' style={{backgroundColor: props.corFundo, color: props.corPercentual}}>
      <span className='Percentual' style={{width: `${props.percentual}%`, backgroundColor: props.corPercentual}}></span>
      {props.percentual}%
    </div>
  );
};

export default Indice;