import React from 'react'
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="relative w-full sm:w-64 md:w-72 lg:w-64 h-96 overflow-hidden mx-1 hover:scale-105 transition-transform duration-300">
        <div className="relative w-full h-72">
          <Link to={`/product/${props.id}`}>
            <img 
              onClick={window.scrollTo(0, 0)} 
              src={props.image} 
              alt={props.name} 
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
        </div>
        <p className="my-1 text-base text-gray-800">{props.name}</p>
        <div className="flex gap-5">
            <div className="text-xl font-semibold text-gray-800">
                ${props.new_price}
            </div>
            {props.new_old && (
                <div className="text-lg font-medium text-gray-500 line-through">
                    ${props.new_old}
                </div>
            )}
        </div>
    </div>
  )
}

export default Item;
