
const initialState = {
    booking : []
}

const Reservationdata = (state = initialState,action)=>{
    if(action.type === "NEW_BOOKING"){
        return {
            ...state,
            booking:[...state.booking,action.payload]
        }
    }
    else if(action.type === "CANCEL"){
        return state.booking.filter(x=>x.name != action.payload.name)
    }

    return state; 

}

export const cancelBookingData = (oldreservationCanceldata = [],action)=>{
    if(action.type === "CANCEL"){
        return [...oldreservationCanceldata,action.payload]
    }

    return oldreservationCanceldata;

}



export const Accounting = (totalammount = 100,action)=>{
if(action.type === "NEW_BOOKING"){
    return totalammount + action.payload. amount;
}else if(action.type === "CANCEL"){
    return totalammount - action.payload.amount;
}

return totalammount;
}

export default Reservationdata



