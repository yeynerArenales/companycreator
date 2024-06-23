"use client";

// Components
import { Badge, Container, Title } from "./styles";

// Redux
import { useAppSelector } from "@/redux/hooks";

const Header = () => {
  const { status } = useAppSelector((state) => state.companyProccessReducer);

  const defaultBadge = () => {
    switch (status) {
      case "progress":
        return <Badge status="progress">In progress</Badge>;

      case "success":
        return <Badge status="success">success</Badge>;

      case "error":
        return <Badge status="error">error</Badge>;

      default:
        return <></>;
    }
  };

  return (
    <Container>
      <Title>New Company</Title>
      {defaultBadge()}
    </Container>
  );
};

export default Header;
