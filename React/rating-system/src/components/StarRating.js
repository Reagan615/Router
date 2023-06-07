import {useState} from 'react';
import Star from './Star';

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleSelect = (index) => {
    setRating(index + 1);
  }

  const stars = [...Array(5)].map((_, index) => (
    <Star
      key={index}
      selected={index < rating}
      onSelect={() => handleSelect(index)}
    />
  ));

  let ratingText = '';
  switch(rating) {
    case 1:
    ratingText = 'Terrible';
    break;
  case 2:
    ratingText = 'Not bad';
    break;
  case 3:
    ratingText = 'Good';
    break;
  case 4:
    ratingText = 'Very good';
    break;
  case 5:
    ratingText = 'Excellent';
    break;
  default:
    ratingText = '';
    break;
  }

  return (
    <div className='rating-container'>
       <div className='rating'>
       {stars}
       </div>
       <span className='ratingText'>{ratingText}</span>
    </div>
   
  )
}

export default StarRating