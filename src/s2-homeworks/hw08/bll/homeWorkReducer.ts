import {UserType} from '../HW8'

type ActionType = { type: 'sort'; payload: 'up' | 'down' }  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    // let copyState = [...state] // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up'){

                return [...state].sort((a, b) => {
                    if (a['name'] < b['name']){
                        return -1;
                    }
                    return 1
                })
            }
            if(action.payload === 'down'){

                return [...state].sort((a, b) => {
                    if (a['name'] > b['name']){
                        return -1;
                    }
                    return 1
                })
            }
            return state
        }
        case 'check': {
            return [...state].filter((u => u.age >= 18))
        }
        default:
            return state
    }
}