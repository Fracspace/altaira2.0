import React from 'react'
import YurtHero from '../components/YurtPageComponents/YurtHero'
import YurtOwnership from '../components/YurtPageComponents/YurtOwnership'
import PremiumLiving from '../components/YurtPageComponents/PremiumLiving'
import YurtExperience from '../components/YurtPageComponents/YurtExperience'
import { getExhangeRate } from '../lib/getExchangeRate'

const page = () => {
  return (
    <div>
        <YurtHero />
        <YurtOwnership />
        <PremiumLiving />
        <YurtExperience />
    </div>
  )
}

export default page