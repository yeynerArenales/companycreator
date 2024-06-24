"use client";

// Components
import { Badge, Container, Title } from "./styles";

// Hooks
import { useGetState } from "@/hooks";

const Header = () => {
  const { status } = useGetState();

  const defaultBadge = () => {
    switch (status) {
      case "progress":
        return <Badge $status="progress">In progress</Badge>;

      case "success":
        return <Badge $status="success">success</Badge>;

      case "error":
        return <Badge $status="error">error</Badge>;

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
