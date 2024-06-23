// Components
import { SidebarButton } from "../../atoms/Buttons";
import { Container, ButtonsBox, SubTitle, SubTitlesBox } from "./styles";

// Redux
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { setStep } from "@/redux/features/companyProcessSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const {
    step,
    status,
    businessForm: { error: businessFormError },
    contactForm: { error: contactFormError },
  } = useAppSelector((state) => state.companyProccessReducer);

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
            disabled={status === "success"}
            onClick={() => {
              if (b == 1) {
                dispatch(setStep(b));
              } else if (b === 2 && !businessFormError) {
                dispatch(setStep(b));
              } else if (b === 3 && !contactFormError && !businessFormError) {
                dispatch(setStep(b));
              }
            }}
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
