import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { images } from '../../assets/image'
import { getLatLon } from '../../store/features/weather'
import style from './navbar.module.scss'

const Navbar = () => {
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState('light')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const setWeather = async e => {
    if (e.key === 'Enter' && query.trim()) {
      setIsLoading(true)
      try {
        await dispatch(getLatLon(query))
      } finally {
        setIsLoading(false)
      }
    }
  }

  const changeTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme == 'light') {
      document.body.classList.remove('active')
    } else {
      document.body.classList.add('active')
    }
  }, [theme])

  return (
    <nav className={style.nav} role="navigation">
      <a href="/" className={style.logo} aria-label="На главную">
        <img src={images.logo} alt="Логотип" className={style.logo__img} />
        <span className={style.logo__text}>vue weather</span>
      </a>
      <div className={style.search}>
        <button
          className={`${style.theme_toggle} ${theme === 'dark' ? style.theme_toggle_dark : ''}`}
          onClick={changeTheme}
          aria-label={`Переключить на ${theme === 'light' ? 'темную' : 'светлую'} тему`}
        >
          <img src={images.city} alt="" className={style.search__img} />
        </button>
        <div className={style.input_wrapper}>
          <input
            type="text"
            className={`${style.search__input} ${isLoading ? style.loading : ''}`}
            placeholder="Выбрать город"
            onChange={e => setQuery(e.target.value)}
            onKeyDown={setWeather}
            aria-label="Поиск города"
            disabled={isLoading}
          />
          {isLoading && <div className={style.spinner}></div>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
