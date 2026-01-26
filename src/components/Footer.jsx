import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const theme = useSelector(state => state.ui.theme)

  // Цвета под Warhammer: светлая тема — старинная бумага, тёмная тема — мрачный камень
  const background = theme === 'light' ? '#f5f0e6' : '#1a1a1a'
  const color = theme === 'light' ? '#3e2f1c' : '#f0d7a0'

  return (
    <footer
      style={{
        padding: '20px',
        background: background,
        color: color,
        textAlign: 'center',
        marginTop: 'auto',
        fontFamily: 'serif',
        borderTop: theme === 'light' ? '1px solid #3e2f1c' : '1px solid #f0d7a0',
        transition: 'all 0.3s ease',
      }}
    >
      <p>© 2026 Империум Warhammer</p>
    </footer>
  )
}

export default Footer
