import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours} from 'date-fns'
import { CalendarEvent, CalendarModal, NavBar } from "../"
import { localizer, getMessagesES } from '../../helpers'
import { useState } from 'react'


const events = [{
  title: 'Cumpleanos del jefe',
  notes: 'Comprar torta',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Agustin'
  }
}]


export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log({event, start, end, isSelected});
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opcity: 0.8,
      color: 'white'
    }
    return {
      style
    }
  }

  const onDoubleClick = (event) => {
    console.log({doubleClick: event});

  }

  const onSelect = (event) => {
    console.log({select: event})
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event);
  }
  
  return (
    <>
      <NavBar/>

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
        <CalendarModal/>
    </>
  )
}