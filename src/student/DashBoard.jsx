import React from 'react'
import { Navbar } from './Studentcomponent/Navbar'
import Card from './Studentcomponent/card'
const DashBoard = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className="p-4 sm:ml-64">
      <div className="grid flex grid-cols-1 gap-4">
        <Card/>
      </div>
    </div>
    </>
  )
}
export default  DashBoard ;
