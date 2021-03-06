import styled from 'styled-components';

export const ContentContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  height: calc(90vh - 5rem);

  display: flex;
  align-items: center;
  justify-content:  space-between;
  
  
  img{
    max-width: 480px;
  }
`;

export const Hero = styled.section`


    h1{
    font-size: 3.75rem;
    line-height: 4.5rem;
    font-weight: bold;
    margin-top: 2.5rem;
    color: var(--white);

    span {
      color: var(--yellow-200);

      span{
        color: var(--orange-300);
      }
    }
  }

  p{
    font-size: 1.5rem;
    margin-top: 1rem;
    color: var(--orange-50);
  }

  button{
    font-size: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    border: 0;
    background: var(--orange-100);
    color: var(--white);
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }

`;

export const Footer = styled.footer`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  span{
    color: var(--white);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  div{
    display: flex;
    align-items: center;
    a{
      color: var(--white);
      margin-left: 0.25rem;
      text-decoration: none;

      &:hover{
        color: var(--yellow-200);

      }

    }
  }

`;