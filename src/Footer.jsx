import React from 'react'
import leafImg from './Images/leaf.png'

function Footer() {
  return (
    <section className='footer-container'>
      <section>
        <div className='footer-country'>Nigeria</div>
      </section>
      <hr className='hr' />
      <section className='bottom-footer'>
        {/* Section 1 */}
        <section className='section-item2'>
          <div className='footer'>
            <a href='https://youtu.be/gEhB2t1kTDo'>About</a>
          </div>
          <div className='footer'>
            <a href='https://youtu.be/oQw8pn-xgZY'>Advertising</a>
          </div>
          <div className='footer'>
            <a href='https://youtu.be/DheeQqH1Cok'>Business </a>
          </div>
          <div className='footer'>
            <a href='https://youtu.be/0eKVizvYSUQ'>How Search Works</a>
          </div>
        </section>
        {/* Section 2 */}
        <section className='carbon-section'>
          <div className='footer'>
            <img src={leafImg} className='leafImg' alt='img' />
            <a href='##'>Carbon neutral since 2007</a>
          </div>
        </section>
        {/* Section 3 */}
        <section className='section-item1'>
          <div className='footer'>
            <a href='##'>Privacy</a>
          </div>
          <div className='footer'>
            <a href='##'>Terms</a>
          </div>
          <div className='footer'>
            <a href='##'>Settings</a>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Footer
