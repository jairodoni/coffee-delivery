import styled from 'styled-components'

export const PresentationContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > div:first-child {
    display: flex;
    flex-direction: column;

    align-items: space-between;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.3;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.3;
      margin-bottom: 4.125rem;
    }
  }
  img {
    width: 29.75rem;
  }
`
export const PresentationBackground = styled.div`
  width: 100%;
  height: 500px;

  position: absolute;
  left: 0;
  margin-top: 3rem;

  background-image: url('/src/assets/imgs/background-presentation.png');
  background-size: contain;

  filter: blur(4px);
`

export const PresentationItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    display: inline-flex;
    align-items: center;

    span {
      margin-left: 4px;
    }
  }
  div + div {
    margin: 1rem 0.5rem 0.5rem 0;
  }
`
