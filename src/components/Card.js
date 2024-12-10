import React from 'react';

const Card = ({name, email, id}) => {	
	return(
	 <div className= "tc dib bg-white-90 br3 pa3 ma3 grow bw2 shadow-5">
	   <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
	   <div>
		<h2 className='black-50 code'> {name} </h2>
		<p className='Black-60 code'>  {email} </p>
	   </div>
	</div>
		 

		);
}

export default Card;