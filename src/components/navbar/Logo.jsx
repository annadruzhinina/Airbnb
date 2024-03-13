import logo from '../../../public/images/logo.png'

import './Logo.scss'

export default function Logo() {
  return (
    <div>
      <img  className='logo-img' src={logo} alt="Logo" />
    </div>
  )
}
