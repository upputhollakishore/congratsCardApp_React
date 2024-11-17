const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='middile-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='image'
      />
      <h1 className='name-heading'>Kiran V</h1>
      <p className='paragraph'>
        Vishnu institute of Computer Education Techology. Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
