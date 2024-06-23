'use client'

import { Review } from '@/components/molecules/Review'
import Sidebar from '@/components/molecules/Sidebar'
import { ContainerRow } from './styles'
import { DefaultProcess } from './steps'

export const TmCompanyProcess = () => {
  return (
    <ContainerRow>
      <Sidebar />
      <DefaultProcess />
    </ContainerRow>
  )
}
