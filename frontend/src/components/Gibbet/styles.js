import styled from "styled-components";

export const Container = styled.div`
  height: 250px;
  width: 173px;
  flex-shrink: 0;

  .gibbet{
    position: relative;
    width: 150px;
    height: 15px;
    background-color: black;

    &::before{
      position: absolute;
      content: ''; 
      width: 15px;
      height: 250px;
      background-color: black;
    }

    &::after{
      position: absolute;
      right: 0;
      content: ''; 
      width: 16px;
      height: 30px;
      background-color: black;
    }

    .gibbet__rope{
      position: absolute;
      background-color: black;
      right: 6px;
      width: 3px;
      height: 50px;

      .gibbet__persona{
        position: relative;
        top: 50px;
        right: 20px;

        >*{
          position: absolute;
          background-color: black;
          width: 5px;
        }

        .persona__head{
          width: 35px;
          height: 40px;
          background-color: transparent;
          border: 4px solid black;
          border-radius: 50%;
        }

        .persona__body{
          height: 60px;
          top: 45px;
          right: -21px;
        }

        .persona__arm--left, .persona__arm--right{
          height: 45px;
          transform: rotate(-40deg);
          top: 30px;
          right: -6px;
        }

        .persona__arm--right{
          transform: rotate(40deg);
          right: -36px;
        }

        .persona__leg--left, .persona__leg--right{
          height: 45px;
          transform: rotate(-160deg);
          top: 100px;
          right: -14px;
        }

        .persona__leg--right{
          transform: rotate(160deg);
          right: -28px;
        }
      }
    }   

    @media screen and (max-width: 900px){
      transform: scale(.6);
    }
    
  }
  @media screen and (max-width: 900px){
      width: 135px;
      height: 160px;
    }
`