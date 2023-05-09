import { styled } from "styled-components";

export const Nav = styled.div`
  border-bottom: 2px solid lightgray;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  position:sticky;
  background:#fff;
  z-index:100;
  top : 0;
  .logo {
    padding: 5px 0;
    display: flex;align-items: center;justify-content: center;
  }
  ul {
    list-style-type:  none;
    display: flex;
    flex-flow: row nowrap;
    padding: 0;
    a{
        padding: 0; 
        text-decoration:none;
        color:gray;
        padding:10px 10px;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        transition:.2s ease all;

        &.active {
        color: #218aa9;
      }
    }
  }
`;
