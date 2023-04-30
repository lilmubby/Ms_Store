import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <section>
      <ul>
        <li>
          <img src={logo} alt='logo' />
          <span>
            Copyright &copy; 2023.
          </span>
        </li>
        <li>
          <h4>Connect With us</h4>
          <a>Instagram</a>
          <a>Twitter</a>
        </li>
        
      </ul>
    </section>
  )
}

export default Footer