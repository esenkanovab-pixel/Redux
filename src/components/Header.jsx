import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../features/ui/uiSlice'

const Header = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.ui.theme)

  // Цвета под Warhammer
  const background = theme === 'light' ? '#f5f0e6' : '#1a1a1a'
  const color = theme === 'light' ? '#3e2f1c' : '#f0d7a0'

  return (
    <header
      style={{
        padding: '20px',
        background: background,
        color: color,
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'serif',
        borderBottom: theme === 'light' ? '1px solid #3e2f1c' : '1px solid #f0d7a0',
      }}
    >
      <h1>Империум Warhammer</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          padding: '8px 16px',
          background: theme === 'light' ? '#3e2f1c' : '#f0d7a0',
          color: theme === 'light' ? '#f5f0e6' : '#1a1a1a',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontFamily: 'serif',
          transition: 'all 0.3s ease',
        }}
      >
        Сменить тему
      </button>
    </header>
  )
}

export default Header
