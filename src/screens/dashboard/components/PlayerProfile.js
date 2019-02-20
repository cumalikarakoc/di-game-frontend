import React from 'react'
import PropTypes from 'prop-types'

const PlayerProfile = ({size, position, level, avatarUrl}) => {
  return (
    <div className='rounded-full absolute'
         style={{
           backgroundSize: 'cover',
           backgroundImage: `url('${avatarUrl}')`,
           width: size.width,
           height: size.height,
           left: `${position.x}px`,
           top: `${position.y}px`
         }}>
      <div className='relative w-full h-full'>
        <div className='absolute pin-b flex justify-center w-full h-full items-end -mb-4'>
          <span className='inline-block p-2 bg-grey rounded-full' style={{fontSize: '0.85em'}}>LV {level}</span>
        </div>
      </div>
    </div>
  )
}

PlayerProfile.propTypes = {
  level: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  size: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
}

export default PlayerProfile
