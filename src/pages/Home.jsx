import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const theme = useSelector(state => state.ui.theme)

  
  const background = theme === 'light' ? '#f5f0e6' : '#1a1a1a'
  const color = theme === 'light' ? '#3e2f1c' : '#f0d7a0'

  return (
    <main
      style={{
        padding: '40px',
        minHeight: '60vh',
        background: background,
        color: color,
        transition: 'all 0.3s ease',
        fontFamily: 'serif',
      }}
    >
      <h2>Добро пожаловать в мир Warhammer</h2>
      <p>
        Исследуйте тёмные земли и сражайтесь с ордами хаоса. Пусть судьба Империума
        будет в ваших руках!
      </p>
    </main>
  )
}

export default Home
