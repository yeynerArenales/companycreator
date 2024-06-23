// Components
import { SidebarButton } from "../../atoms/Buttons";
import { Container, ButtonsBox, SubTitle, SubTitlesBox } from "./styles";

// Redux
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { setStep } from "@/redux/features/companyProcessSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { step, status } = useAppSelector(
    (state) => state.companyProccessReducer
  );

  const buttons: number[] = [1, 2, 3];
  const subtitles: string[] = [
    "Business structure",
    "Contact person",
    "Review & submit",
  ];
  return (
    <Container>
      <ButtonsBox>
        {buttons.map((b) => (
          <SidebarButton
            status={
              step > b || status === "success"
                ? "success"
                : step === b
                ? "selected"
                : "empty"
            }
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
  );
};

export default Sidebar;
