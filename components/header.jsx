import {css, cx} from '@emotion/css'
import Nav from '../components/nav'

const Header = ({}) => {

  const header = css`
    grid-column: 1/-1;
    // background-image: url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80');
    background-size: cover;
    background-position: 0% 45%;
  `
  
  return (
    <div className={`header ${cx(header)}`}>
      <Nav></Nav>
      <div className="header-container">
        <div className="header-left">
          <h1>Our guaranteed cleaning services will give you total peace of mind!</h1>
          <span>Do you want to grow your business and reach the right audience with your products and services? Miami Visuals is the Website and Funnels Builder Platform for you. With us, you can Sell your Products and Services to your clients on the Internet!</span>
          <button><svg><use xlinkHref="sprite.svg#icon-calendar"></use></svg>Book Now</button>
        </div>
        <div className="header-right">
          <svg><use xlinkHref="sprite.svg#icon-mail"></use></svg>
          <h2>Contact us today!</h2>
          <span>We'll help get everything cleaned up.</span>
          <form className="form">
            <div className="form-group-single">
              <svg><use xlinkHref="sprite.svg#icon-user"></use></svg>
              <input type="text" name="name" placeholder="Name"/>
            </div>
            <div className="form-group-single">
              <svg><use xlinkHref="sprite.svg#icon-mail"></use></svg>
              <input type="email" name="email" placeholder="Email"/>
            </div>
            <div className="form-group-single">
              <svg><use xlinkHref="sprite.svg#icon-mobile"></use></svg>
              <input type="tel" name="phone" placeholder="Phone"/>
            </div>
            <button>Contact us now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header
