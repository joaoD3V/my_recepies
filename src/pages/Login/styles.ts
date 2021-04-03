import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ContentContainer = styled.main`
  display: flex;
  height: 100vh;

  
  >img{
    width: 50vw;
    height: 100vh;
    filter: brightness(0.5);
  }

  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;

   form{
     background: var(--grey-200);
     width: 27rem;
     height: 18rem;
     border-radius: 0.5rem;
     padding: 0 3.5rem;

     display: flex;
     flex-direction: column;
     align-items: center;
     margin-top: 4rem;

     h2{
       font-size: 2.5rem;
       color: var(--white);
       font-weight: bold;
       margin-top: 1.25rem;
     }

     input{
       width: 20rem;
       height: 3rem;
       margin-top: 2rem;
       border-radius: 0.25rem;
       border: 0;

       font-size: 1.24rem;
       padding-left: 1.5rem;
       color: var(--grey-8d00);

       & + input{
         margin-top: 1rem;
       }
     }

     button{
       margin-top: 1.25rem;
       width: 11rem;
       height: 2.5rem;
       background: var(--grey-800);
       color: var(--white);
       border: 0;
       font-size: 1.5rem;
       border-radius: 0.25rem;
       margin-bottom: 2rem;

       transition: filter 0.2s;

       &:hover{
         filter: brightness(0.8);
       }
     }                  
   }

   > span{
    margin-top: 1rem;
    color: var(--white);
  }

   h5{
     font-size: 1.25rem;
     color: var(--yellow-200);
     font-weight: normal;
     margin-top: 1.5rem;

  
   }
  }
`;

export const Register = styled(Link)`
  text-decoration: none;
  color: var(--yellow-200);    
   span{
       font-weight: bold;
       margin-left: 1rem;

       transition: filter 0.2s;
       &:hover{
         cursor: pointer;
         filter: brightness(0.8);
       }
     }
`;