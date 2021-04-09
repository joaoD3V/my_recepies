import styled from 'styled-components';

export const ContentContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  height: calc(90vh - 5rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0.75rem;
  margin-top: 3rem;

  h1{
    font-size: 2rem;
    color: var(--yellow-200);
  }

  form{
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;

    input{
      border: 0;
      border-radius: 0.25rem;
      height: 2.5rem;
      font-size: 1rem;

    }
    
    > input{
      background: var(--yellow-200);
      width: 50rem;
      color: var(--grey-800);
      padding-left: 1rem;

      &::placeholder{
         color: var(--grey-800);
      }
    }

    .informations-group{
      margin-top: 1rem;
      display: flex;


      input{
        width: 100%;
        text-align: center;
        & + input{
          margin-left: 1.5rem;
        }
      }

      .time{
        width: 11rem;
        background: var(--grey-200);
        color: var(--white);
        font-weight: 500;

        &::placeholder{
          color: var(--white);
        }
      }    

      .portions{
        width: 12rem;
        background: var(--orange-300);
        color: var(--white);
        font-weight: 500;

        &::placeholder{
          color: var(--white);
        }
      }

      select{
        background: var(--orange-100);
        color: var(--white);
        font-weight: 500;
        margin-left: 1.5rem;
        font-size: 16px;
        border-radius: 0.25rem;
        width: 100%;
        padding-left: 0.5rem;
        font-weight: 500;      
      }
    }

    textarea{
      margin-top: 1rem;
      height: 9rem;
      border-radius: 0.5rem;
      padding-left: 1.5rem;
      padding-top: 1.5rem;
      font-size: 1rem;
      background: var(--brown-500);
      color: var(--white);
      border: 0;

      &::placeholder{
        color: var(--white);
        font-weight: 500;
      }

    }

    .buttons{
      display: flex;
      justify-content: space-between;
      
      button{
        width: 10rem;
        height: 3rem;
        font-size: 1.25rem;
        background: var(--yellow-200); 
        margin-top: 1rem;
        border: 0;
        border-radius: 0.25rem;
        color: var(--grey-800);
        font-weight: 500;
        
      }

    }

     
  }

  span{
    color: var(--white);
  }
`;