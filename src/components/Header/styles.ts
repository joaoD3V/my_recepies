import styled from 'styled-components';


export const Container = styled.header`
  height: 5rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: var(--orange-100);
    font-size: 1.25rem;
    padding: 0.25rem 1rem;
    color: var(--white);
    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;