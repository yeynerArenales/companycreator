// Components
import { Review } from '@/components/molecules/Review'
import { BusinessForm, ContactForm } from '@/components/organism/Forms'
// Hooks
import { useGetState } from "@/hooks";

export const DefaultProcess = () => {
  const { step } = useGetState()

  switch (step) {
    case 1:
      return <BusinessForm />

    case 2:
      return <ContactForm />

    default:
      return <Review />
  }
}
