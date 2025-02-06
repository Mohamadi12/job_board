import JobFilter from '@/components/general/JobFilter'
import JobListings from '@/components/general/JobListings'
import React from 'react'

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <JobFilter />
      <div className="col-span-2 flex flex-col gap-6">
        <JobListings />
      </div>
    </div>
  )
}

export default Home