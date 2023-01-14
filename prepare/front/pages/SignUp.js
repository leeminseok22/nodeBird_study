import Head from "next/head";
import AppLayout from "../components/AppLayout";
import {Form, Input, Checkbox, Button} from 'antd';
import { useCallback, useState} from "react";
import useInput from '../hooks/useInput';
import PropTypes from "prop-types";

const TextInput = ({ value }) => {
    return (
      <div>{value}</div>
    )
  };
  
  TextInput.propTypes = {
    value: PropTypes.string,
  };

const SignUp = () => {
    const [pwCheck,setPwCheck] = useState(false);
    const [pwError,setPwError] = useState(false);
    const [term,setTerm] = useState(false);
    const [termError,setTermError] = useState(false);

    const [id,onChangeId] = useInput('');
    const [pw,onChangePw] = useInput('');
    const [nick,onChangeNick] = useInput('');

    const onChangePwCheck = useCallback((e) => {
    setPwError(e.target.value !== password);
    setPwCheck(e.target.value);
  }, [pw]);

    const onChangeTerm = useCallback((e)=>{
        setTermError(false);
        setTerm(e.target.checked);
      }, []);
 
    const onSubmit = useCallback(()=>{
        if(pw !== pwCheck) return setPwError(true);
        if(!term) return setTermError(true);
    },[id,pw,nick])
    return (
        <>
        <AppLayout>

            <Form onFinsih={onSubmit}>
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
            </Form>
            </AppLayout>
        </>
    );
};

export default SignUp;
