import React, { useState } from 'react'
import s from './daily.module.scss';
import DailyItem from './DailyItem';
import { useSelector } from 'react-redux';

const Daily = () => {
  const daily = useSelector((state)=> state.weather.weather.daily )
  const [active, setActive] = useState(true);

  return (
    <div className={s.daily}>
        <div className={s.daily__nav}>
            <button 
              className={`${s.daily__btn} ${active ? s.active : ''}`}
              onClick={()=>{setActive(true)}}
            >На неделю</button>
            <button 
              className={`${s.daily__btn} ${!active ? s.active : ''}`}
              onClick={()=>{setActive(false)}}
            >Отменить</button>
        </div>
        <div className={`${s.daily__content} ${active? s.active : ''}`}>
          {
            daily.map((elem, index)=>(
              <DailyItem key={elem.dt} info={elem} index={index}/>
            )).slice(0, 7)
          }
        </div>
    </div>
  )
}

export default Daily