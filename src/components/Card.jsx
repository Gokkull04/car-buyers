import React from 'react'


const Card = (post) => {
  return (
    <div key={post._id}>
						<div className="bg-white w-80 pt-6 ml-6 pb-6 rounded-3xl">
							<h2 className="text-center text-2xl">Details</h2>
							<div className="flex items-start mt-1">
								<span className="w-32 font-bold ml-5 mt-2">Company:</span>
								<span className="flex-1 truncate mt-2">{post.companyname}</span>
							</div>
							<div className="flex items-start">
								<span className="w-32 font-bold ml-5 mt-2">Model:</span>
								<span className="flex-1 truncate mt-2">{post.modelname}</span>
							</div>
							<div className="flex items-start">
								<span className="w-32 font-bold ml-5 mt-2">Year:</span>
								<span className="flex-1 truncate mt-2">{post.year}</span>
							</div>
							<div className="flex items-start">
								<span className="w-32 font-bold ml-5 mt-2">Price:</span>
								<span className="flex-1 truncate mt-2">{post.amount}</span>
							</div>
						</div>
					</div>
  )
}

export default Card;

{/* <div className='pt-10 pl-10'>
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Card Title</h2>
        <img src={props.Image} alt="Car" className="w-40 h-40 ml-9" /> <br />
        <p className='pt-2 text-gray-700'>Company_Name: {props.Company}</p>
        <p className='pt-2 text-gray-700'>Model_Name: {props.Model}</p>
        <p className='pt-2 text-gray-700'>year : {props.year}</p>
        <p className='pt-2 text-gray-700'>price : {props.price}</p>
        
        {/* <p className='pt-2'>image : {props.image}</p> }
    </div>
    </div> */}