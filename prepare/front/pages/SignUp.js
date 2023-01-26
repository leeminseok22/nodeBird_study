
import AppLayout from "../components/AppLayout";
import {Form, Input, Checkbox, Button} from 'antd';
import { useCallback, useState} from "react";
import useInput from '../hooks/useInput';
import PropTypes from "prop-types";
import axios from 'axios';

const TextInput = ({ value }) => {
    return (
      <div>{value}</div>
    )
  };
  
  TextInput.propTypes = {
    value: PropTypes.string,
  };

const SignUp = () => {
    const [pwCheck,setPwCheck] = useState('');
    const [pwError,setPwError] = useState(false);
    const [term,setTerm] = useState(false);
    const [termError,setTermError] = useState(false);

    const [id,onChangeId] = useInput('');
    const [pw,onChangePw] = useInput('');
    const [nick,onChangeNick] = useInput('');

    const onChangePwCheck = useCallback((e) => {
    setPwError(e.target.value !== pw);
    setPwCheck(e.target.value);
    }, [pw]);

    const onChangeTerm = useCallback((e)=>{
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    const getUser = useCallback(async () => {
        await axios({
            method: 'get',
            url: 'http://localhost:3065/user',
            
        })
        .then((res)=>{
            console.log('get success')
            console.log(res);
        })
        .catch(console.error)
    });
 
    const onSubmit = useCallback(async ()=>{
        if(pw !== pwCheck) return setPwError(true);
        if(!term) return setTermError(true);
        console.log(id,pw,pwCheck,term,nick)
        await axios({
            method: 'post',
            url: 'http://localhost:3065/user',
            data: {
                email: id,
                password: pw,
                nickname: nick,
            }
        })
        .then((res)=>{
            console.log('post success')
            console.log(res);
        })
        .catch(console.error)
            
    },[pw,pwCheck,term])
    return (
        <>
        <AppLayout>
            <Form onFinish={onSubmit} style={{padding: 10}}>
                <TextInput value="135135" />    
                <div>
                    <label htmlFor="user-id">id</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nick">nick</label>
                    <br/>
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="user-pw">pw</label>
                    <br/>
                    <Input name="user-pw" type="password" value={pw} required onChange={onChangePw} />
                </div>
                <div>
                    <label htmlFor="user-pw-check">pwCheck</label>
                    <br/>
                    <Input 
                        name="user-pw=check" 
                        type="password"
                        value={pwCheck} 
                        required 
                        onChange={onChangePwCheck} 
                    />
                    {pwError && <div style={{color:"red"}}>not eqaul</div>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>information get correctly</Checkbox>
                    {termError && <div style={{color:'red'}}>accept plz</div>}
                </div>
                <div>
                    <Button type="primary" htmlType="submit">join</Button>
                </div>
                <div>
                    <Button type="primary" onClick={()=>getUser()}>test</Button>
                </div>
            </Form>
            </AppLayout>
        </>
    );
};

export default SignUp;
