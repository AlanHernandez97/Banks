import React from 'react'

const NavBar = () => {
	return (
		<nav className='w-full flex flex-wrap gap-10 justify-around items-center py-10'>
			<div className='w-auto'>
				<h1 className='text-4xl font-bold'>Información de bancos</h1>
			</div>
			<div className='w-full h-fit flex flex-wrap justify-center items-center gap-3 xl:w-1/2'>
				<div className='w-full p-2 xl:w-2/5'>
					<input className='w-full text-black p-4 border-2 border-solid border-black rounded-lg' type="text" placeholder='Buscar banco' />
				</div>
				<div className='w-full p-2 xl:w-2/5'>
					<button className='w-full border p-3 rounded-lg bg-blue-500 text-white'>Ascendiente</button>
				</div>
			</div>
		</nav>
	)
}

export default NavBar