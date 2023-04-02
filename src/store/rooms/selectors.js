import {createSelector} from "@reduxjs/toolkit";

export const selectorAllGuests = (state) => state.roomReducer.potentialGuests

export const selectorSortedGuestsAsc = createSelector(
    [selectorAllGuests],
    potentialGuests => {
        return [...potentialGuests].sort((a,b) => a-b);
    }
)

export const selectorGuestsUnder100 = createSelector(
    [selectorSortedGuestsAsc],
    sortedGuests => {
        return sortedGuests.filter(guest => guest < 100)
    }
)

export const selectorGuestsOverOrEqual100 = createSelector(
    [selectorSortedGuestsAsc],
    sortedGuests => {
        return sortedGuests.filter(guest => guest >= 100)
    }
)


export const selectorRevenueTotal = (state) => state.roomReducer.totalRevenue
export const selectorRevenuePremiumRooms = (state) => state.roomReducer.revenuePremiumRooms
export const selectorRevenueEconomyRooms = (state) => state.roomReducer.revenueEconomyRooms



export const selectorExtraPremiumRooms = (state) => state.roomReducer.extraPremiumRooms
export const selectorOccupiedPremiumRooms = (state) => state.roomReducer.occupiedPremiumRooms
export const selectorOccupiedEconomyRooms = (state) => state.roomReducer.occupiedEconomyRooms