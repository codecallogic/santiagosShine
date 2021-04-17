import React, { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import newdate from 'date-and-time';

const Datepicker = ({}) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(null)
  const [isVisible, setVisible] = useState(false);

  const item = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:     
      if (entries[0].isIntersecting) {
      
        // Not possible to set it back to false like this:
        setVisible(true);
        
        // No need to keep observing:
        observer.unobserve(item.current);
      }
    });
    
    observer.observe(item.current);

    return () => observer.unobserve(item.current);

  }, [])
  
  return (
    <div className="datepicker-container">
      <div className={`datepicker-left ` + (isVisible ? `slideLeft` : null) + (time ? ` slideTopEaseIn` : null)} ref={item}>
        <h2>We will Help you Step by Step just Book a FREE Appointment!</h2>
        {date && time && 
          <div className={`datepicker-left-button slideLeftFast`}><button onClick={ () => setTime(null)}><svg><use xlinkHref="sprite.svg#icon-arrow-left2"></use></svg>Back</button></div>
        }
        {date ? <div className="datepicker-left-box">
          <h6>Date</h6>
          <span>{newdate.format(date, 'ddd, MMM DD YYYY')}</span>
        </div>
        :null }
        <div className="datepicker-left-box">
          <h6>Time</h6>
          <span>Pick a Date and Time</span>
        </div>
      </div>
      {!time &&
      <div className={`datepicker ` + (!time ? ` slideTopEaseIn` : null)}>
          <div>
          <p className="datepicker-selected">Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.</p>
          <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
          </div>
        </div>
      }
      {date && time && 
        <div className={`datepicker-form` + (time ? ` slideTopEaseIn` : null)}>
          <h2>Enter Details</h2>
          <form>
            <div className="datepicker-form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
            </div>
            <div className="datepicker-form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone"/>
            </div>
            <div className="datepicker-form-group">
              <label htmlFor="Email">Email</label>
              <input type="email" name="email"/>
            </div>
            <button>Book Appointment</button>
          </form>
        </div>
      }
      <div className="datepicker-right">
        <div className="datepicker-right-item" onClick={ (e) => setTime(e.target.innerText)}>11:00 AM</div>
        <div className="datepicker-right-item" onClick={ (e) => setTime(e.target.innerText)}>12:00 AM</div>
        <div className="datepicker-right-item" onClick={ (e) => setTime(e.target.innerText)}>1:00 PM</div>
        <div className="datepicker-right-item" onClick={ (e) => setTime(e.target.innerText)}>2:00 PM</div>
        <div className="datepicker-right-item" onClick={ (e) => setTime(e.target.innerText)}>3:00 PM</div>
        <div className="datepicker-right-item" onClick={ (e) => setTime(e.target.innerText)}>4:00 PM</div>
        <div className="datepicker-right-item">5:00 PM</div>
        <div className="datepicker-right-item">6:00 PM</div>
        <div className="datepicker-right-item">7:00 PM</div>
        <div className="datepicker-right-item">8:00 PM</div>
        <div className="datepicker-right-item">9:00 PM</div>
        <div className="datepicker-right-item">10:00 PM</div>
        <div className="datepicker-right-item">8:00 AM</div>
        <div className="datepicker-right-item">9:00 AM</div>
        <div className="datepicker-right-item">11:00 AM</div>
        <div className="datepicker-right-item">11:00 AM</div>
        <div className="datepicker-right-item">11:00 AM</div>
        <div className="datepicker-right-item">11:00 AM</div>
      </div>
    </div>
  )
}

export default Datepicker
