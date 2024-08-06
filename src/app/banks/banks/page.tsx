import { BanksCard } from '@/app/components/bankscard/BanksCard';
import { BanksResponse } from '../interfaces/banks-response';


const getBanks = async () => {
	const data: BanksResponse[] = await fetch(`https://dev.obtenmas.com/catom/api/challenge/banks`)
		.then(response => response.json())
	return data;
}

export async function BanksPage() {

	const banks = await getBanks();

	return (
		<div className='px-10 py-3 flex flex-ro flex-wrap gap-10 xl:justify-evenly'>
			{
				banks.map(bank => (
					<BanksCard
						name={bank.bankName}
						age={bank.age}
						description={bank.description}
						path={bank.url}
					/>
				))
			}
		</div>
	)
}

export default BanksPage;