import React from 'react';
import{Grid,Item,Icon,Image,Container,Header}from'semantic-ui-react';
//import Topics from '../compent/Topics';
import firebase from '../other/firebase';
import{Link} from'react-router-dom';
//import { Avatar } from '@mui/material';
function Posts(){
    const[posts,setPosts]=React.useState([]);
    React.useEffect(()=>{
        firebase.firestore().collection("posts").get()
        .then((collectionSnapshot)=>{
            const data=collectionSnapshot.docs.map(docSnapshot=>{
                const id=docSnapshot.id;
                return {...docSnapshot.data(),id};
            })
            setPosts(data);
        })
    },[]);
    return (<Container>
    <Grid>
        <Grid.Column width={3}>
        
        </Grid.Column>
        <Grid.Column width={10}>
            <Item.Group>
        {posts.map(post=>{
            return <Item key={post.id} as={Link}  
            to={`/posts/${post.id}`}>

                
                {post.author.photoURL ?(<Image src ={post.author.photoURL}/>) :
                (<Icon name="user circle"/>)}
                {post.author.displayName || "User"}
                

                <Item.Image src={post.imageUrl ||  "https://t3.ftcdn.net/jpg/01/74/44/62/360_F_174446259_iYCcLsC7BKaIlSKb7hScY80hNQdMpZgN.jpg"} size ="medium" />
                <Item.Content>
                <Header >{post.title}</Header>
                <Item.Description>{post.content}</Item.Description>
                <Item.Extra>
                    comment{post.commentsCount || 0} ． Like {post.likedBy?.length || 0}
                </Item.Extra>
                </Item.Content>
            </Item>
        })}
        </Item.Group>
            
        </Grid.Column>
        <Grid.Column width={3}>
           
        </Grid.Column>
    </Grid></Container>);
}

export default Posts;