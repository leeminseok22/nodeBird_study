import { useCallback } from "react";
import { Input, Form, Button } from "antd";
import Link from "next/link";
import useInput from "../hooks/useInput";




const LoginForm = ({ setIsLogin }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLogin(true);
    }, [id, password]);

    

    return (
        <Form style={{padding: '10px'}} onFinish={onSubmitForm}>
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
                <lable htmlFor="user-password">pw</lable>
                <br />
                <Input
                    name="user-password"
                    value={password}
                    onChange={onChangePassword}
                    required
                ></Input>
            </div>
            <div style={{marginTop: '10px'}}>

                    <Button type="primary" htmlType="submit" loading={false}>
                        login
                    </Button>
                    <Link href="/signup">
                        <a href="/signup">
                            <Button>signUp</Button>
                        </a>
                    </Link>
                
            </div>
        </Form>
    );
};

export default LoginForm;
