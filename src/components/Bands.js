import React from 'react'
import Band from './Band'

const Bands = (props) => {
  return (
    <div>
      <br />
      Current Bands:
      <ol>
        { props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand} />)}
      </ol>
    </div>
  )
}

export default Bands
