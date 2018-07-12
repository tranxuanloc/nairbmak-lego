import React from 'react';

const ComponentSection = (props) =>
<section>
  <div className='section-title'>
    <h2>{props.title}</h2>
  </div>
  <div className='section-content'>
    {props.children}
  </div>
  <hr />
</section>;

export default ComponentSection;