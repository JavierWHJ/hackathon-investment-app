import React from 'react';
import {Dropdown} from 'react-bootstrap';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'

const ProfileMenu = () => {
    const router = useRouter()

    const onLogout = () => {
        Cookies.remove('userEmail');
        router.pathname != '/' ? router.push('/') : router.reload();
        toast.success("Logged Out!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <>
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
            <ToastContainer />
        </>
    );
}

export default ProfileMenu;
