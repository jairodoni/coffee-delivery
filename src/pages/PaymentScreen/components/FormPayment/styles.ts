import styled, { css } from 'styled-components'

export const ICON_COLOR = {
  yellow: 'yellow-700',
  purple: 'purple-500',
} as const

interface TypeProps {
  typePaymentSelected: string
  typePayment: 'creditCard' | 'debitCard' | 'money'
}

export interface ColorIconProps {
  color: keyof typeof ICON_COLOR
}

export const FormContainer = styled.div`
  > div {
    padding: 2.5rem;
  }

  input::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  input {
    height: 2.625rem;
    width: 100%;
    margin-bottom: 16px;
    padding: 12px;
    border-radius: 4px;

    background: ${(props) => props.theme['gray-300']};
    border: 2px solid ${(props) => props.theme['gray-400']};

    &:first-child {
      width: 12.5rem;
    }
    &:focus {
      border: 2px solid ${(props) => props.theme['yellow-700']};
    }
  }

  > div > div {
    display: flex;
    flex-direction: row;
  }

  > div > div:last-child > input:last-child {
    max-width: 60px;
  }

  > div > div > input + input {
    margin-left: 12px;
  }

  div:last-child > div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`
export const HeaderForm = styled.div<ColorIconProps>`
  display: flex;
  padding-bottom: 2rem;
  color: ${(props) => props.theme['gray-800']};

  svg {
    color: ${(props) => props.theme[ICON_COLOR[props.color]]};
    font-size: 1.25rem;
    margin-right: 8px;
  }

  p {
    display: flex;
    flex-direction: column;
    line-height: 1.3;

    span:first-child {
      font-size: 1rem;
    }
    span:last-child {
      font-size: 0.875rem;
    }
  }
`

export const ButtonTypePayment = styled.button<TypeProps>`
  height: 3.1875rem;
  width: 100%;
  padding: 1rem;

  background: ${(props) => props.theme['gray-400']};
  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1.6;

  svg {
    margin-right: 12px;
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme['purple-500']};
  }

  transition: background ease 0.1s;

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
  ${({ typePayment, typePaymentSelected }) =>
    typePaymentSelected === typePayment &&
    css`
      background: ${(props) => props.theme['purple-300']};
      border: 1px solid ${(props) => props.theme['purple-500']};
      &:hover {
        background: ${(props) => props.theme['purple-300']};
      }
    `};
`
