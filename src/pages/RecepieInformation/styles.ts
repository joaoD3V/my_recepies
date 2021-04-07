import styled from 'styled-components';


export const ContentContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0.75rem;
  margin-top: 0.75rem;

  background: var(--yellow-200);
  border-radius: 0.5rem;
  padding: 1rem;

  .buttons{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    button{
      font-size: 1rem;
      background: var(--grey-800);
      color: var(--yellow-200);
      border: 0;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-weight: 600;
    }

    
  }

  .title{
    margin-top: 3rem;
    background: var(--grey-800);
    color: var(--yellow-200);
    width: 90%;
    text-align: center;
    padding: 0.5rem 0;
    border-radius: 0.25rem;
    font-size: 2rem;
    font-weight: 500;
    border: 0;
  }

  .subinformations{
    width: 90%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 1rem;

   .time{
    background: var(--grey-800);
    color: var(--yellow-200);
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    font-weight: normal;
    border-radius: 0.25rem;
    width: 9rem;

    display: flex;
    align-items: center;


    input{
      width: 2rem;
      text-align: center;
      background: transparent;
      border: 1px solid var(--yellow-200);
      color: var(--yellow-200);
      font-size: 1.25rem;
      border-radius: 0.25rem;
      padding: 0.25rem 0.25rem;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    span{
      margin-left: 0.5rem;
    }
   }

   .category{
      background: var(--grey-800);
      color: var(--yellow-200);
      font-size: 1.25rem;
      padding: 0.5rem 1rem;
      font-weight: normal;
      border-radius: 0.25rem;
   }

   .portions{
    background: var(--grey-800);
    color: var(--yellow-200);
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    font-weight: normal;
    border-radius: 0.25rem;

      input{
        width: 2rem;
        text-align: center;
        background: transparent;
        border: 1px solid var(--yellow-200);
        color: var(--yellow-200);
        font-size: 1.25rem;
        border-radius: 0.25rem;
        padding: 0.25rem 0.25rem;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button{
          -webkit-appearance: none;
          margin: 0;
        }
      }

       /* Firefox */
      input[type=number] {
          -moz-appearance: textfield;
      }

      span{
      margin-left: 0.5rem;
    }

   }
  }

    h2{
      align-self: center;
      color: var(--grey-800);
      font-size: 1.75rem;
      font-weight: bold;
      margin-top: 2rem;
    }

  .ingredients{
    background: var(--grey-800);
    color: var(--yellow-200);
    width: 90%;
    height: 25rem;
    margin-top: 2rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.25rem;

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    
  }

  .preparation-mode {
    background: var(--grey-800);
    color: var(--yellow-200);
    width: 90%;
    height: 35rem;
    margin-top: 2rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.25rem;

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;

  }
`;