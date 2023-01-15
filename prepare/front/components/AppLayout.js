import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input,Row,Col } from "antd";
import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            <div>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link href="/">
                            <a>home</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/profile">
                            <a>profile</a>
                        </Link>
                    </Menu.Item>
                    <SearchInput
                        enterButton
                        style={{ verticalAlingn: "middle" }}
                    />
                    <Menu.Item>
                        <Link href="/signup">
                            <a>signUp</a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
            <Row gutter={8}>
                <Col xs={24} md={6}>
            {isLogin ? (
                <UserProfile setIsLogin={setIsLogin} />
            ) : (
                <LoginForm setIsLogin={setIsLogin} />
            )}
            </Col>
            <Col xs={24} md={6}>
                {children}
            </Col>
            <Col xs={24} md={6}>
                <a href="https://velog.io/@lee222" target="_blank" rel="notreferrer noopenner">Made by Me</a>
</Col>
            </Row>
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
