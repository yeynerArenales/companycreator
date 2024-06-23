import React from 'react'

// Style
import styled from 'styled-components'

// Components
import { SidebarButton } from '../../atoms/Buttons'
import { useAppSelector } from '@/redux/hooks'
import { useDispatch } from 'react-redux'
import { setStep } from '@/redux/features/companyProcessSlice'

const Container = styled.div`
  width: 30%;
  height: auto;
  display: flex;
`

const ButtonsBox = styled.div`
  width: 33px;
  height: 155px;
  background: #d9d9d970;
  border-radius: 109px;
  margin: 20px 0 10px 80px;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

const SubTitlesBox = styled.div`
  width: 200px;
  height: 155px;
  margin: 25px 0 00px 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
`

const SubTitle = styled.h2`
  width: 100%;
  color: black;
  font-weight: 500;
  margin: 0;
  font-size: 16px;
`

const Sidebar = () => {
  const dispatch = useDispatch()
  const { step } = useAppSelector((state) => state.companyProccessReducer)

  const buttons: number[] = [1, 2, 3]
  const subtitles: string[] = [
    'Business structure',
    'Contact person',
    'Review & submit'
  ]
  return (
    <Container>
      <ButtonsBox>
        {buttons.map((b) => (
          <SidebarButton
            selected={b == step && true}
            onClick={() => dispatch(setStep(b))}
            key={b}
            label={`${b}`}
          />
        ))}
      </ButtonsBox>
      <SubTitlesBox>
        {subtitles.map((sub) => (
          <SubTitle key={sub}>{sub}</SubTitle>
        ))}
      </SubTitlesBox>
    </Container>
  )
}

export default Sidebar
