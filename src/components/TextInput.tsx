import { nanoid } from 'nanoid';
import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  explainer?: string;
  error?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      id = `input-${nanoid()}`,
      explainer,
      error,
      ...props
    }: TextInputProps,
    ref
  ) => {
    return (
      <InputContainer>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <input
          type="text"
          {...props}
          id={id}
          ref={ref}
          aria-describedby={explainer ? `${id}-explainer` : undefined}
        />
        {error && <InputError>{error}</InputError>}
        {explainer && (
          <InputExplainer id={`${id}-explainer`}>{explainer}</InputExplainer>
        )}
      </InputContainer>
    );
  }
);

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  margin-bottom: 0.25rem;
`;

const InputError = styled.div`
  color: hsl(345deg 80% 60%);
  margin-top: 0.25rem;
`;

const InputExplainer = styled.div`
  padding: 1rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;

  background-image: linear-gradient(
    45deg,
    hsl(47deg 100% 84%) 0%,
    hsl(40deg 100% 87%) 14%,
    hsl(33deg 100% 90%) 29%,
    hsl(25deg 100% 92%) 43%,
    hsl(15deg 100% 93%) 57%,
    hsl(5deg 100% 95%) 71%,
    hsl(353deg 100% 92%) 86%,
    hsl(343deg 100% 86%) 100%
  );

  border: 2px solid hsl(25deg 80% 50%);
  color: hsl(345deg 60% 35%);
`;
