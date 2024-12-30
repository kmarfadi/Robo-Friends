import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return(
	<div className='pa2 '>
		<input 
		className='pa3 ba bg bg-black white br2 b--light-blue' 
		type='search' 
		placeholder='search robots'
		onChange ={searchChange} 
		/>
	</div>
		);
}

export default SearchBox;