import { BanksResponse } from "@/app/banks/interfaces/banks-response"

//Creamos las acciones de nuestro Reducer
export type BankActions =
	{ type: "DeleteBank", payload: { id: BanksResponse['id'] } }


//Creamos el state de nuestro Reducer
export type BankState = {
	banks: BanksResponse[]
	bankId: BanksResponse['id']
}

//creamos el estado inicial de nuestro reducer
export const initialState: BankState = {
	banks: [],
	bankId: ''
}

//Creamos nuesro Reducer
export const bankReducer = (state: BankState = initialState, actions: BankActions) => {
	if (actions.type === 'DeleteBank') {
		return {
			...state,
			banks: state.banks.filter(bank => bank.id !== actions.payload.id)
		}
	}
}