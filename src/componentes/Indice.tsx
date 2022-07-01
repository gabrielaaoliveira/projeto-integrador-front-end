import { FunctionComponent } from 'react';
import './Indice.css';

type Props = {
  percentual: number;
  corFundo: string;
  corPercentual: string;
};

const Indice: FunctionComponent<Props> = function (props) {
  return (
    <div className='Indice' style={{backgroundColor: props.corFundo}}>
      <span className='Percentual' style={{width: `${props.percentual}%`, backgroundColor: props.corPercentual}}>{props.percentual}%</span>
    </div>
  );
};

export default Indice;