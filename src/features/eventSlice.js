import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    events: [],
    loading: true
}

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        setEvents(state, action) {
            state.events = action.payload
        },
        setLoading(state, action) {
          state.loading = action.payload
        },
        joinToEvent(state, action) {
        const shadowState = [...current(state.events)];
        const index = shadowState.findIndex((e) => e.id == action.payload.eventId);
        const participants = [...shadowState[index].participants, action.payload.fullName];
        shadowState[index] = {
            ...shadowState[index],
            participants: participants
        }
        state.events = shadowState
        },
        leaveEvent(state, action) {
            const shadowState = [...current(state.events)];
            const index = shadowState.findIndex((e) => e.id == action.payload.eventId);
            const participants = [...shadowState[index].participants].filter((e) => e.id === action.payload.fullName);
            shadowState[index] = {
                ...shadowState[index],
                participants: participants
            }
            state.events = shadowState;
        }
    }
})

export const { 
    setEvents,
    joinToEvent,
    setLoading,
    leaveEvent
} = eventSlice.actions

export const getEvents = state => state.events;

export default eventSlice.reducer;