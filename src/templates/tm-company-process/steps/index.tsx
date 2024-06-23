import { Review } from '@/components/molecules/Review'
import { BusinessForm, ContactForm } from '@/components/organism/Forms'
import { useAppSelector } from '@/redux/hooks'

export const DefaultProcess = () => {
  const { step } = useAppSelector((state) => state.companyProccessReducer)

  switch (step) {
    case 1:
      return <BusinessForm />

    case 2:
      return <ContactForm />

    default:
      return <Review />
  }
}
