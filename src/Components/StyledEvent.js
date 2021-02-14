import styled from "styled-components";

export const Details = styled.details`
  max-width: 40%;
  margin: 1rem auto;
  background: #ffffffaa;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0px 0px 2px 2px #00000011;
`;

export const Summary = styled.summary`
  margin: 0 auto;

  &&::-webkit-details-marker {
    display: none;
  }

  &&:before {
    content: "+";
    font-size: 1.9em;
    margin: -5px 10px 0 0;
  }
`;

export const HeaderSpan = styled.span`
  font-size: 1.9rem;
  font-weight: bold;
`;

export const SubHeaderSpan = styled.span`
  font-size: 1rem;
`;

export const InfoUl = styled.ul`
  margin: 0;
  padding: 0;
`;

export const InfoLi = styled.li`
  list-style: none;
  padding: 0;
  margin: 1rem;
`;

export const InfoSpan = styled.span`
  font-weight: bold;
`;
