import { FaStar } from 'react-icons/fa';

function Star({selected, onSelect}) {
  return (
    <div className='stars'>
        <span onClick={onSelect} className='star'>
        {selected ? <FaStar color='yellow' size={40}/> : <FaStar color='grey' size={40}/>}
        </span>
    </div>
    
  );
}

export default Star

