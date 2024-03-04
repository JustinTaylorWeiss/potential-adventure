import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import { useURL } from "../contexts/useURL";

const NavWrap = styled.div`
    position: absolute;
    width: 100%;
    top: 10px;
    z-index: 2;
    font-size: 40px;
    color: oldlace;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Menu = styled(MenuIcon)`
    width: 100vw;
    height: 100vw;
    margin: 0 20px;
    color: ${props => props.$isContact ? "#101012" : "oldlace"};
    &:hover {
        cursor: pointer;
    }
    &:active {
        margin: 2.5px 22.5px 0 22.5px;
    }
`;

export const Nav = ({menuClick}) => {

    const { currentURL } = useURL();
    const isContact = (currentURL === "/contact-us");

    return <NavWrap>
        <Menu sx={{ fontSize: 45, '&:active': { fontSize: 40} }} $isContact={isContact} onClick={() => menuClick()}/>
    </NavWrap>  
};