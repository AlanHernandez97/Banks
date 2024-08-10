import { BanksResponse } from '../interfaces/banks-response';
import Container from '../../components/container/Container';


const getBanks = async () => {
	const data: BanksResponse[] = await fetch(`https://dev.obtenmas.com/catom/api/challenge/banks`)
		.then(response => response.json())
	return data;
}

export async function BanksPage() {


	const banks = await getBanks()



	return (

		<Container
			data={banks}
		/>


	)
}

export default BanksPage;