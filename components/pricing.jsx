
const Pricing = ({}) => {
  
  return (
    <div className="pricing">
      <h1 className="pricing-heading">Pricing</h1>
      <h6>1. Select a Plan or Type of Cleaning and Book an Appointment.</h6>
      <h6>2. Add the Cleaning Package and we will take care of everyting for you.</h6>
      <div className="pricing-plans">
        <div className="pricing-plans-left">
          <h1>Plans</h1> 
          <span>$75<h2>/hr or $100 for two hours</h2></span>
          <ul className="pricing-plans-left-list">
            <ol>Commercial Cleaning</ol>
            <ol>Residential Cleaning</ol>
            <ol>Janitorial Services</ol>
            <ol>Business Office Cleaning Services</ol>
            <ol>Window Washing Service</ol>
            <ol>Kitchen and Bathroom Deep Cleaning</ol>
            <ol>Carpet Cleaning Service</ol>
            <ol>Steam Cleaning Service</ol>
            <ol>Move-in Move-out Cleaning Services</ol>
          </ul>
          <button className="buttons-select">Select</button>
        </div>
        <div className="pricing-plans-right">
          <h1>Type of Cleaning</h1> 
          <span>$90<h2>/studio or $150 for apartment/home</h2></span>
          <ul className="pricing-plans-left-list">
            <ol>Commercial Cleaning</ol>
            <ol>Residential Cleaning</ol>
            <ol>Janitorial Services</ol>
            <ol>Business Office Cleaning Services</ol>
            <ol>Window Washing Service</ol>
            <ol>Kitchen and Bathroom Deep Cleaning</ol>
            <ol>Carpet Cleaning Service</ol>
            <ol>Steam Cleaning Service</ol>
            <ol>Move-in Move-out Cleaning Services</ol>
          </ul>
          <button className="buttons-select">Select</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
