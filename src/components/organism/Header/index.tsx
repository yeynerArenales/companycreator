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
        return <Badge status="progress">In Progress</Badge>;

      case "success":
        return <Badge status="progress">In Progress</Badge>;

      case "error":
        return <Badge status="progress">In Progress</Badge>;

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
