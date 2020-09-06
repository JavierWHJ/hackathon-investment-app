import React from 'react';
import {Dropdown} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'

const ProfileMenu = () => {
    const router = useRouter()

    const onLogout = () => {
        Cookies.remove('userEmail');
        router.pathname != '/' ? router.push('/') : router.reload();
    }

    return (
        <Dropdown alignRight>
            <Dropdown.Toggle
                id="dropdown-profile-menu"
                variant="light"
                title=""
                bsPrefix="none"
                className="p-0"
            >
                <img
                    src="/user.svg"
                    height="35"
                    alt="User Profile"
                />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={onLogout}>
                    Logout
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ProfileMenu;
