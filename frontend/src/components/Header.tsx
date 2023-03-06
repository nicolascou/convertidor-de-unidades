import React from 'react'

const Header: React.FC = () => {
  return (
    <div>
      <header>
        <div className='header-content'>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.04046 1.70711C5.43098 1.31658 5.43098 0.683417 5.04046 0.292893C4.64994 -0.0976311 4.01677 -0.0976311 3.62625 0.292893L0.95958 2.95956C0.569056 3.35008 0.569056 3.98325 0.95958 4.37377L3.62625 7.04044C4.01677 7.43096 4.64994 7.43096 5.04046 7.04044C5.43098 6.64992 5.43098 6.01675 5.04046 5.62623L4.0809 4.66667H17.6667C18.219 4.66667 18.6667 4.21895 18.6667 3.66667C18.6667 3.11438 18.219 2.66667 17.6667 2.66667H4.0809L5.04046 1.70711Z" fill="#2E0039"/>
            <path d="M16.9596 10.9596C16.5691 11.3501 16.5691 11.9832 16.9596 12.3738L17.9191 13.3333H4.33335C3.78107 13.3333 3.33335 13.781 3.33335 14.3333C3.33335 14.8856 3.78107 15.3333 4.33335 15.3333H17.9191L16.9596 16.2929C16.5691 16.6834 16.5691 17.3166 16.9596 17.7071C17.3501 18.0976 17.9833 18.0976 18.3738 17.7071L21.0405 15.0404C21.431 14.6499 21.431 14.0168 21.0405 13.6262L18.3738 10.9596C17.9833 10.569 17.3501 10.569 16.9596 10.9596Z" fill="#2E0039"/>
          </svg>
          <h1>unit converter</h1>
        </div>
      </header>
    </div>
  )
}

export default Header