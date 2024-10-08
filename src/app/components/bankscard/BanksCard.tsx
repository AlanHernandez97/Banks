'use client'
import { BanksResponse } from "@/app/banks/interfaces/banks-response";
import { bankReducer, initialState } from "@/reducers/bankReduer";
import Image from "next/image";
import Link from "next/link"
import { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

type BanksCardProps = {
	name: string;
	description: string;
	age: number;
	path: string;
	idBank: BanksResponse['id']
}



export const BanksCard = ({ age, description, name, path, idBank }: BanksCardProps) => {

	const initialValues: BanksResponse = {
		id: uuidv4(),
		age: age,
		bankName: name,
		description: description,
		url: path
	}
	const [bank, setBank] = useState<BanksResponse>(initialValues)
	console.log(bank)

	// const deleteBank = () => {
	// 	const banksDeleted = bank.filter(bank => idBank !== bank.id);
	// 	setBank(banksDeleted);
	// }




	return (
		<>

			<div className="flex flex-col gap-10 border-2 border-black w-96 h-fit rounded-lg px-3 py-3 hover:shadow-2xl hover:shadow-black hover:-translate-y-4 transition ease-in-out duration-500">
				<div className="flex justify-between items-center py-3">
					<div>
						<h3 className="text-2xl font-bold">{name}</h3>
						<span className="text-lg">{age} años de servicio</span>
					</div>
					<div >
						<Image
							className="border border-black rounded-xl"
							src={path}
							width={100}
							height={100}
							alt="BankImage"
						/>
					</div>
				</div>
				<div>
					<span>{description}</span>
				</div>
				<div className="flex justify-between items-center">
					<Link href={path}>Visitar sitio web</Link>
					<button className="hover:text-red-500" onClick={() => deleteBank()}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
						</svg>
					</button>

				</div>
			</div>

		</>
	)
}
