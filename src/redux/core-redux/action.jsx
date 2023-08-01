export const newBooking = (name, amount) => {
    return {
            type:"NEW_BOOKING",
            payload:{
                name,
                amount
            }
        }
  }
  
  export const cancelBooking = (name,amount) => {
    return {
        type:"CANCEL",
            payload:{
                name,
                amount
            }
    }
  }