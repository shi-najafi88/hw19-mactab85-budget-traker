export const Reducer = (state , action)=> {
    switch(action.type){
        case "SAVE":
        return[...state, {
            name: action.payload.name,
            cost: action.payload.cost,
            id: Date.now()
        }]
    }
}