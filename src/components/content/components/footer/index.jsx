import React from 'react'
import RoomIcon from '@material-ui/icons/Room'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import DriveEtaIcon from '@material-ui/icons/DriveEta'

export const Footer = () => (
  <div className="w-screen h-40 bg-yellow-900 md:flex md:items-center md:justify-between px-8 sm:px-12 md:px-20 pt-6 md:py-2">
    <div className="text-white mb-4 md:mb-0 pl-4 md:pl-0">
      <div className="my-1">小店位置：南投縣埔里鎮東榮路155號</div>
      <div className="my-1">聯絡電話：0937-480-947</div>
    </div>
    <div className="flex">
      <RoomIcon className="w-10 h-10 text-white mx-2" />
      <DriveEtaIcon className="w-10 h-10 text-white mx-2" />
      <FacebookIcon className="w-10 h-10 text-white mx-2" />
      <InstagramIcon className="w-10 h-10 text-white mx-2" />
    </div>
  </div>
)
