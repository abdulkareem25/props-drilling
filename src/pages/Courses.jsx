import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Cohort from '../components/Cohort'
import Dynamic from '../components/Dynamic'

const Courses = () => {
  return (
    <div>
      <h1>All Courses</h1>
      <div className="nav2">
        <NavLink
          className={({ isActive }) => (isActive ? 'red' : 'link')}
          to={'/courses/cohort'}
          element={<Cohort />}
        >
          Cohort 2.0
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'red' : 'link')}
          to={'/courses/dynamic'}
          element={<Dynamic />}
        >
          Dynamic
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Courses
