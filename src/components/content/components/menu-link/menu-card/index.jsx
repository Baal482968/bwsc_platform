import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

export const MenuCard = ({ cardTitle, imageSrc, imageAlt }) => {
  const [isHover, setisHover] = useState(false)
  return (
    <div
      className="relative h-80 w-full sm:w-1/2 lg:w-1/4 mx-4 my-2 sm:my-0"
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <img
        className="absolute h-full w-full object-cover px-4 sm:px-0 box-border"
        src={imageSrc}
        alt={imageAlt}
      />
      {isHover && (
        <div className="absolute h-full w-full px-4 sm:px-0 box-border">
          <Box
            className="h-full w-full flex items-center justify-center text-white text-xl  bg-gray-600 bg-opacity-50 cursor-pointer"
            onClick={() => console.log('click')}
          >
            {cardTitle}
          </Box>
        </div>
      )}
    </div>
  )
}

MenuCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.node.isRequired,
  imageAlt: PropTypes.string.isRequired,
}
