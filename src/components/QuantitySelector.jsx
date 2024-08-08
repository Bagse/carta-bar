import {useState} from 'react'
import { SquareMinus } from './icons/SquareMinus';
import { SquarePlus } from './icons/SquarePlus';

const QuantitySelector = ({ initialQuantity, onChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
  
    const handleIncrement = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        onChange(newQuantity);
      }
    };
  
    return (
      <div className="flex items-center space-x-2">
        <button onClick={handleDecrement}><SquareMinus className="hover:text-[#d9d9d9]" /></button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}><SquarePlus className="hover:text-[#d9d9d9]" /></button>
      </div>
    );
  };
  
  export default QuantitySelector;