import React from 'react'
import Job from '../components/Job'
import { usePageTitle } from '../hooks/usePageTitle'

const JobPage = () => {
  usePageTitle('Должности')
  return <Job />
}

export default JobPage
