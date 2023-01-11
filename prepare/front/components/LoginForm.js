import { useCallback, useState, useMemo } from "react";
import { Input, Form, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const BtnWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 5px;
`;

const LoginForm = ({ setIsLogin }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const style = useMemo(() => ({ marginTop: 10 }), []);

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLogin(true);
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <lable htmlFor="user-id">id</lable>
                <br />
                <Input
                    name="user-id"
                    value={id}
                    onChange={onChangeId}
                    required
                ></Input>
            </div>
            <div>
                <lable htmlFor="user-password">id</lable>
                <br />
                <Input
                    name="user-password"
                    value={password}
                    onChange={onChangePassword}
                    required
                ></Input>
            </div>
            <div>
                <BtnWrapper style={style}>
                    <Button type="primary" htmlType="submit" loading={false}>
                        login
                    </Button>
                    <Button>signUp</Button>
                </BtnWrapper>
            </div>
        </FormWrapper>
    );
};

export default LoginForm;
