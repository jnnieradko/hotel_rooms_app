import {createReducer} from "@reduxjs/toolkit";
import {submitReservationForm} from "./actions";


const initState = {
    premiumRooms: 0,
    economyRooms: 0,
    potentialGuests: [23, 45, 155, 374, 22, 99, 100, 101, 115, 209],
    occupiedPremiumRooms: 0,
    occupiedEconomyRooms: 0,
    extraPremiumRooms : 0,
    revenuePremiumRooms : 0,
    revenueEconomyRooms : 0,
    totalRevenue: 0
  }


export const roomReducer = createReducer(initState,builder =>
    builder
        .addCase(submitReservationForm, (state, action)=>{
           console.log(action.payload)
            state.premiumRooms = action.payload.numberOfPremiumRooms
            state.economyRooms = action.payload.numberOfEconomyRooms

            state.revenuePremiumRooms = action.payload.updateRevenuePremiumRooms
            state.revenueEconomyRooms = action.payload.updateRevenueEconomyRooms
            state.totalRevenue = action.payload.updateTotalRevenue

            state.occupiedPremiumRooms = action.payload.updateOccupiedPremiumRooms
            state.occupiedEconomyRooms = action.payload.updateOccupiedEconomyRooms

            state.extraPremiumRooms = action.payload.updateExtraPremiumRooms
        } )

)