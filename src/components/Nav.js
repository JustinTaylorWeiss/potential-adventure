import styled from "styled-components";
import logo from "./assets/logo1.png";
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
    width: 20%;
`;

const Menu = styled(MenuIcon)`
    width: 100vw;
    height: 100vw;
    margin: 0 20px;
    color: white;
    &:hover {
        cursor: pointer;
        color: brown;
    }
`;

export const Nav = ({menuClick}) => (
    <NavWrap>
        <Menu sx={{ fontSize: 60 }} onClick={() => menuClick()}/>
        <Logo src={logo} draggable="false"/>
        <Menu visibility="hidden" sx={{ fontSize: 60 }}/>
    </NavWrap>  
);