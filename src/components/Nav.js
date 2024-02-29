import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';


const NavWrap = styled.div`
    position: absolute;
    width: 100%;
    top: 10px;
    font-size: 40px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Logo = styled.img`
    width: 10%;
`;

const Menu = styled(MenuIcon)`
    width: 100vw;
    height: 100vw;
    margin: 0 20px;
    color: white;
    filter: drop-shadow(1px 1px 0.5px black);
    &:hover {
        cursor: pointer;
    }
    &:active {
        margin: 2.5px 22.5px 0 22.5px;
    }
`;

export const Nav = ({menuClick}) => (
    <NavWrap>
        <Menu sx={{ fontSize: 60, '&:active': { fontSize: 55} }} onClick={() => menuClick()}/>
    </NavWrap>  
);