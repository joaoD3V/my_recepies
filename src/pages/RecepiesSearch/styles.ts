import styled from 'styled-components';


export const ContentContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  height: calc(100vh - 5rem);

  display: flex;
  flex-direction: column;
  padding-left: 0.75rem;
  margin-top: 5rem;

  .subheader{
    display: flex;
    justify-content: space-between;

      h1{
        font-size: 2.5rem;
        color: var(--yellow-200);
      }

      .search{
          display: flex;
          align-items: center;

          input{
            width: 20rem;
            height: 100%;
            background: var(--yellow-200);
            border: 0;
            border-radius: 0.5rem;
            color: var(--grey-800);
            font-size: 1.25rem;
            padding-left: 1rem;
            padding-right: 4rem;

          }

          .search-icon{
            margin-left: -3.5rem;
            color: var(--grey-800);
            font-size: 1.25rem;
            cursor: pointer;
            border-left: 1px solid var(--grey-800);
            height: 90%;
            width: 2.25rem;
            padding-left: 1rem;
          }

      }

  }
  
  h1{
        font-size: 2.5rem;
        color: var(--yellow-200);
  }

  > span{
    text-align: center;
    font-size: 4rem;
    color: #fff8;
    font-weight: 100;
    margin-top: 10rem;
  }

  .recepie{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1120px;
    background: var(--yellow-200);
    border-radius: 0.5rem;
    height: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;

    margin-top: 4rem;
    cursor: pointer;

    & + .recepie{
     margin-top: 2rem;
    }

    h2{
      font-size: 2rem;
      color: var(--grey-800);
      font-weight: 500; 
    }

    div{
      max-height: 10rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3{
        margin-right: 2rem;
        font-size: 1.25rem;
        color: var(--white);
        background: var(--orange-100);
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        font-weight: normal;
      }

      span{
        font-size: 1.25rem;
        color: var(--yellow-200);
        border-radius: 0.25rem;
        padding: 0.5rem 0.5rem;
        background: var(--grey-200);
        font-weight: 500;
      }      
    }
  }

  
`;