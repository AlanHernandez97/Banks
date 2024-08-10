'use client'
import { BanksResponse } from "@/app/banks/interfaces/banks-response"
import { useState } from "react"
import { BanksCard } from "../bankscard/BanksCard"



type ContainerProps = {
	data: BanksResponse[]
}

const Container = ({ data }: ContainerProps) => {

	const [searchTerm, setSearchTerm] = useState<string>("");

	const handleChange = (e) => {
		setSearchTerm(e.target.value)
	}




	const dataFiltered = data.filter(bank => bank.bankName.toLowerCase().includes(searchTerm.toLowerCase()));
	return (
		<div>
			<header>
				<nav className='w-full flex flex-wrap gap-10 justify-around items-center py-10'>
					<div className='w-auto'>
						<h1 className='text-4xl font-bold'>Información de bancos</h1>
					</div>
					<div className='w-full h-fit flex flex-wrap justify-center items-center gap-3 xl:w-1/2'>
						<div className='w-full p-2 xl:w-2/5'>
							<input
								className='w-full text-black p-4 border-2 border-solid border-black rounded-lg'
								type="text"
								placeholder='Buscar banco'
								value={searchTerm}
								onChange={handleChange}
								name='search'
							/>
						</div>
						<div className='w-full p-2 xl:w-2/5'>
							<button className='w-full border p-3 rounded-lg bg-blue-500 text-white'>Ascendiente</button>
						</div>
					</div>
				</nav>
			</header>
			<div className='px-10 py-3 flex flex-ro flex-wrap gap-10 xl:justify-evenly'>
				{
					dataFiltered && dataFiltered.map(bank => (
						<BanksCard
							key={bank.id}
							name={bank.bankName}
							age={bank.age}
							description={bank.description}
							path={bank.url}
							idBank={bank.id}
						/>
					))
				}

			</div>
		</div>
	)
}

export default Container