import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store/calendar/calendarSlice";


export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async(calendarEvent) => {
        
        if (calendarEvent._id) {
            //actualizando
            console.log('hola');
        }
        else {
            //creando
            dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}))
            console.log('chau')
        }
    }
    
    
    return {
        // Propiedades
        events,
        activeEvent,
        //Metodos
        setActiveEvent,
        startSavingEvent

 }
}
