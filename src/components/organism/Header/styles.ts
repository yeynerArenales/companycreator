import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #eceeeb;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  padding: 20px 0 10px 80px;
  margin: 0;
`;

export const Badge = styled.div<{ status?: string }>`
  width: 75px;
  height: 18px;
  background-color: #80808014;
  font-size: 12px;
  text-align: center;
  margin: 15px 0 0 20px;
  color: ${(props) => {
    switch (props.status) {
      case "progress":
        return "#FFA500";
      case "success":
        return "#008000";
      case "error":
        return "#FF0000";
    }
  }};
`;
