import React from 'react';

function Cards({ item }) {
    console.log(item)
  return (
    <>
    <div className="mt-4 my-3 p-3">
    <div className="card w-80   hover:scale-105 duration-200  shadow-xl">
      <figure>
        <img src={item.image} alt={item.name} />
      </figure>
      <div className="card-body" text-white>
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{item.category}</div>
          
            <div className="badge badge-outline">${item.price}</div>
          
            <div className="font-size cursor-pointer px-2 py-3 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white duration-200">
  Buy Now
</div>
          
        </div>
      </div>
    </div>
    </div>
  </>
  );
}

export default Cards;
