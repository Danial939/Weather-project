import React from 'react'
import { icons } from '../../assets/image'
import getTime from '../../utils/getTime'
import s from './daily.module.scss'

const DailyItem = ({ info, index }) => {
  let icon = parseInt(info.weather[0].icon)
  let iconImg = icons[icon]
  let desc = info.weather[0].description
  desc = desc[0].toUpperCase() + desc.substring(1)
  return (
    <div className={s.daily__item}>
      <h3 className={s.daily__title}>
        {index == 0
          ? 'Сегодня'
          : index == 1
            ? 'Завтра'
            : getTime(info.dt, 'weekday')}
      </h3>
      <p className={s.daily__date}>
        {getTime(info.dt, 'day')} {getTime(info.dt)}
      </p>
      <img src={iconImg} alt="" className={s.daily__img} />
      <p className={s.daily__temp}>{Math.round(info.temp.day)}°</p>
      <p className={s.daily__night}>{Math.round(info.temp.night)}°</p>
      <p className={s.daily__desc}>{desc}</p>
    </div>
  )
}

export default DailyItem
