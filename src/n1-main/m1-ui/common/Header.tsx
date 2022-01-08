import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {
    SIGN_IN_PATH, REGISTER_PATH, FORGOT_PATH,
    MEMORY_PATH
} from './Routes';
import SuperButton from "./c2-SuperButton/SuperButton";
import SuperCheckbox from "./c3-SuperChechbox/SuperCheckbox";
import SuperInputText from "./c1-SuperInputText/SuperInputText";

const Header: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: "wrap",
            }}>
                <button onClick={() => setShow(!show)}>{show ? 'hide dev header' : 'show dev header'}</button>

                {show && <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>}
                {show && <NavLink to={REGISTER_PATH}>register</NavLink>}
                {show && <NavLink to={FORGOT_PATH}>forgot</NavLink>}

                {show && <NavLink to={MEMORY_PATH}>memory</NavLink>}

            </div>

            <div><SuperButton> default</SuperButton></div>
            <div><SuperButton red> delete</SuperButton></div>
            <div><SuperButton disabled> disabled</SuperButton></div>
            <div><SuperCheckbox/></div>
            <div><SuperInputText/></div>
        </>
    );
};

export default Header;