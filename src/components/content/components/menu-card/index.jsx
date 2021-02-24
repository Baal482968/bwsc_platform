import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

export const MenuCard = ({ cardTitle, imageSrc, imageAlt }) => {
  const [isHover, setisHover] = useState(false)
  return (
    <div
      className="relative w-1/4 mx-4 h-80"
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <img
        className="absolute h-full w-full object-cover"
        src={imageSrc}
        alt={imageAlt}
      />
      {isHover && (
        <Box
          className="absolute flex items-center justify-center text-white text-xl h-full w-full bg-gray-600 bg-opacity-50 cursor-pointer"
          onClick={() => console.log('click')}
        >
          {cardTitle}
        </Box>
      )}
    </div>
  )
}

MenuCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.node.isRequired,
  imageAlt: PropTypes.string.isRequired,
}
