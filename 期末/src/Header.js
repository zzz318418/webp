import React from 'react';
import {Menu,Search} from 'semantic-ui-react';
import{Link} from'react-router-dom';
import firebase from './other/firebase';
function Header(){
    const [user,setUSER]=React.useState(null);
    React.useEffect(()=>{
        firebase.auth().onAuthStateChanged((curuser)=>{
            setUSER(curuser);
        });
    },[]);

        return (<Menu>
            <Menu.Item as ={Link} to ="/">InstagramClone</Menu.Item>
            <Menu.Item>
                
            </Menu.Item>
            <Menu.Menu position='right'>
                {user ? <>
                        <Menu.Item as ={Link} to ="/newpost">
                            Post 
                        </Menu.Item>
                        <Menu.Item as ={Link} to ="/mem">
                             member
                        </Menu.Item>
                        <Menu.Item onClick={()=>firebase.auth().signOut()}>
                            log out
                        </Menu.Item>
                </>:
                        <Menu.Item as ={Link} to ="/signin">
                            sign up/log in 
                        </Menu.Item>
                }

            </Menu.Menu>
            </Menu>
        );
}

export default Header;