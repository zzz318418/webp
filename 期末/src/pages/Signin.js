import React from 'react';
import{Menu,Form,Container,Message} from 'semantic-ui-react';
import firebase from  '../other/firebase' ;
import "firebase/auth";
import { useHistory }from'react-router-dom';
function Signin(){
    const history=useHistory();
    const[activeItem, setActiveItem] = React.useState('signin');
    const[email, setEmail]=React.useState('');
    const[password, setPassword]=React.useState('');
    const[isLoad,setisLoad]= React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    function onSubmit(){
        setisLoad(true);
        if(activeItem==='register'){
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(() => {
                history.push('/');
                setisLoad(false);
            }).catch((error) => 
            {
                switch (error.code)
                {
                    case 'auth/email-already-in-use':
                        setErrorMessage('email-already-in-use');
                        break;
                    case 'auth/invalid-email':
                        setErrorMessage('invalid-email');
                        break;
                    case 'auth/weak-password':
                        setErrorMessage('weak-password');
                        break;        
                    default:    
                }
                setIsLoading(false);
            }
            );
        }else if(activeItem==='signin'){
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(() => {
                history.push('/');
                setisLoad(false);
            })
            .catch
            ((error) => 
            {
                switch (error.code)
                {
                    case 'auth/invalid-email':
                        setErrorMessage('invalid-email');
                        break;
                    case 'auth/user-not-found':
                        setErrorMessage('user-not-found');
                        break;
                    case 'auth/wrong-password':
                        setErrorMessage('wrong-password');
                        break;        
                    default:    
                }
                setIsLoading(false);
            }
            );
        }
    }
        return <Container>
            <Menu widths="2">
                <Menu.Item
                active={activeItem==='register'}
                onClick={()=>setActiveItem('register')}
                >sign up</Menu.Item>
                <Menu.Item
                active={activeItem==='signin'}
                onClick={()=>setActiveItem('signin')}
                >login</Menu.Item>
            </Menu>
            <Form onSubmit={onSubmit}>
                <Form.Input label="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                 placeholder="please input your email"/>
                <Form.Input label="password" 
                value={password} 
                onChange={(p) => setPassword(p.target.value)} 
                placeholder="please input your password"
                type="password"/>
                 {errorMessage && <Message negative>{errorMessage}</Message>}
                <Form.Button loading={isLoad}>
                    {activeItem==='register'&&'sign up'}
                    {activeItem==='signin'&&'login'}
                </Form.Button>
            </Form>
        </Container>;
}

export default Signin;