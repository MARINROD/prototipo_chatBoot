import './header.css'
import logo from '../../../assets/forseaLogo.png'
import options from '../../../assets/options.png'


export default function Header() {
    return (
        <div className='Header'>
            <img className='options' src={options} alt="options" />
            <img className='logo' src={logo} alt="logo" />

        </div>
    )
}
