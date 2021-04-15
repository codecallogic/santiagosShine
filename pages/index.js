import styled from '@emotion/styled'
import {css, cx} from '@emotion/css'
import Header from '../components/header'
import {useEffect, useRef, useState} from 'react'

const Home = ({}) => {

  const services = css`
  background-image: url('https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80');
  background-position: 25% 75%;
  `

  const qualityOne = css`
    background-image: url('https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-position: 25% 75%;
  `

  const qualityTwo = css`
    background-image: url('https://images.pexels.com/photos/4008518/pexels-photo-4008518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-position: 25% 75%;
  `

  const qualityThree = css`
    background-image: url('https://images.pexels.com/photos/3756649/pexels-photo-3756649.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
    background-position: 25% 75%;
  `
  const [isVisible, setVisible] = useState(false);

  const item = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:     
      if (entries[0].isIntersecting) {
      
        // Not possible to set it back to false like this:
        setVisible(true);
        
        // No need to keep observing:
        observer.unobserve(item.current);
      }
    });
    
    observer.observe(item.current);
    
    return () => observer.unobserve(item.current)

  }, [])
  
  return (
    <>
    <Header></Header>
    <div className="home">
      <div className={`home-services ${cx(services)}`}>
        <div className="home-services-filter"></div>
        <h1 className="home-services-heading">Some of our services</h1>
        <div className="home-services-collection">
          <div className="home-services-collection-item">
            <svg><use xlinkHref="sprite.svg#icon-factory"></use></svg>
            <h2>Industrial</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores consectetur atque voluptatibus dolorem repellendus nulla aliquid, voluptas numquam commodi suscipit, sint ipsa soluta recusandae reiciendis quaerat perferendis temporibus cumque!</span>
          </div>
          <div className="home-services-collection-item">
            <svg><use xlinkHref="sprite.svg#icon-home"></use></svg>
            <h2>Residential</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores consectetur atque voluptatibus dolorem repellendus nulla aliquid, voluptas numquam commodi suscipit, sint ipsa soluta recusandae reiciendis quaerat perferendis temporibus cumque!</span>
          </div>
          <div className="home-services-collection-item">
            <svg><use xlinkHref="sprite.svg#icon-office"></use></svg>
            <h2>Commerical</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi maiores consectetur atque voluptatibus dolorem repellendus nulla aliquid, voluptas numquam commodi suscipit, sint ipsa soluta recusandae reiciendis quaerat perferendis temporibus cumque!</span>
          </div>
        </div>
      </div>
      <div className="home-quality" ref={item}>
        <div className="home-quality-left"></div>
        <div className="home-quality-center">
          <div className={`home-quality-item ${cx(qualityOne)} ` + (isVisible ? `slideRight` : null)}>
            <div className="home-quality-item-filter"></div>
            <svg><use xlinkHref="sprite.svg#icon-checkmark"></use></svg>
            <div>
              <h2>We offer quality service</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto sapiente eum soluta mollitia enim dolore minima rem expedita! Molestias harum soluta dignissimos. Repudiandae nesciunt rem doloribus vel, commodi iure?</span>
            </div>
          </div>
          <div className={`home-quality-item ${cx(qualityTwo)} ` + (isVisible ? `slideTop` : null)}>
            <div className="home-quality-item-filter"></div>
            <svg><use xlinkHref="sprite.svg#icon-checkmark"></use></svg>
            <div>
              <h2>We offer quality service</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto sapiente eum soluta mollitia enim dolore minima rem expedita! Molestias harum soluta dignissimos. Repudiandae nesciunt rem doloribus vel, commodi iure?</span>
            </div>
          </div>
          <div className={`home-quality-item ${cx(qualityThree)} ` + (isVisible ? `slideLeft` : null)}>
            <div className="home-quality-item-filter"></div>
            <svg><use xlinkHref="sprite.svg#icon-checkmark"></use></svg>
            <div>
              <h2>We offer quality service</h2>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto sapiente eum soluta mollitia enim dolore minima rem expedita! Molestias harum soluta dignissimos. Repudiandae nesciunt rem doloribus vel, commodi iure?</span>
            </div>
          </div>
        </div>
        <div className="home-quality-right"></div>
      </div>
    </div>
    </>
  )
}

export default Home
