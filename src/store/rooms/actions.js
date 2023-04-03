import {createAction} from "@reduxjs/toolkit";


export const submitReservationForm = createAction('room/submit', function updateRoom(dataFromForm) {

    console.log("Akcja - podaj ilosc pokoi")
    return {
        payload: dataFromForm

    }
})


