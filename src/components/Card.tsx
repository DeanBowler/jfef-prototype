import styled from 'styled-components';

const StyledCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0.3px 0.5px 0.7px rgba(0, 0, 0, 0.1),
    0.8px 1.6px 2px -0.8px rgba(0, 0, 0, 0.1),
    2.1px 4.1px 5.2px -1.7px rgba(0, 0, 0, 0.1),
    5px 10px 12.6px -2.5px rgba(0, 0, 0, 0.1);
`;

const CardHeading = styled.h2``;

export interface CardProps {
  heading?: string;
  children: React.ReactNode;
}

export function Card({ heading, children }: CardProps) {
  return (
    <StyledCard>
      {heading && <CardHeading>{heading}</CardHeading>}
      {children}
    </StyledCard>
  );
}
