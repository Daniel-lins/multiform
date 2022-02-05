import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #B8B8D4;

    }
    h1 {
        margin:0;
        padding:0;
        font-size; 26px;

    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }
    label {
        font-size: 13px;

        input {
            display:block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD90;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color:#02044A
            
        }
    }
   
    .backButton {
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 30px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        text-decoration: none;
    
    }
  
`;


export const ContainerInfo = styled.div `
   
    text-align: center;

    p {
        font-size: 17px;
        
    }
    .TitlesInformation{
        font-size: 23px;
        margin-right: 10px;
  
    }

`;

export const Name = styled.div `
   padding: 10px;
   display: flex;
   align-items: center;
   
`;

export const Nivel = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
`;

export const Email = styled.div `
    padding: 10px;
    display: flex;
    align-items: center;

`;

export const GithubContainer = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`;