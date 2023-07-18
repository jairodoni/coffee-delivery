import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 20rem;
  max-width: 16rem;

  div:first-child {
    flex: 1;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 7.5rem;
      height: 7.5rem;
      z-index: 2;
      margin-top: 5rem;
      position: absolute;
    }
  }

  > div:last-child {
    z-index: 1;
    height: 90%;
    max-width: 100%;

    padding: 6.4rem 0.875rem 0.875rem;
    flex-wrap: wrap;
    border-radius: 6px 36px 6px 36px;
    background: ${(props) => props.theme['gray-200']};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  > label {
    display: inline-block;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    > span {
      padding: 4px 8px;
      border-radius: 100px;

      background: ${(props) => props.theme['yellow-300']};
      color: ${(props) => props.theme['yellow-700']};

      font-size: 0.625rem;
      font-weight: 700;
    }
  }
  > h4 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['gray-800']};
  }
  > p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
  }
`
export const SelectProduct = styled.div`
  max-width: 13.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  small {
    /* border: 2px solid blueviolet; */
    font-size: 0.875rem;
    span {
      font-size: 1.5rem;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      line-height: 1.3;
    }
  }
`
export const ControlAmountProduct = styled.div`
  display: inline-flex;
  justify-content: space-between;

  > div {
    max-width: 4.5rem;
    margin-right: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-400']};

    > button {
      width: 1.97rem;
      background: ${(props) => props.theme['gray-400']};
      color: ${(props) => props.theme['purple-500']};

      border: none;

      display: inline-flex;
      justify-content: center;

      &:hover {
        color: ${(props) => props.theme['purple-700']};
      }
    }
  }

  > button {
    height: 2.375rem;
    width: 2.375rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme['gray-100']};

    border: none;
    border-radius: 6px;

    transition: background ease-in 0.2s;

    &:hover {
      background: ${(props) => props.theme['purple-500']};
    }
  }
`
