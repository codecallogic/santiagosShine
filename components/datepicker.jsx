import React, { useState } from 'react'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const Datepicker = ({}) => {
  const [date, setDate] = useState()
  
  return (
    <div className="datepicker">
      <p>
        Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
      </p>
      <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
    </div>
  )
}

export default Datepicker
