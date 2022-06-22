import {Container,Header,Form,Image,Button}from 'semantic-ui-react';
import React from 'react';
import 'firebase/firestore';
import 'firebase/storage';
import firebase from '../other/firebase';
import {useHistory}from 'react-router-dom';
function NewPost()
{
    const history = useHistory();
    const [title,setTitle] = React.useState('');
    const [content,setContent]=React.useState('');
    const [file,setFile]=React.useState(null);

const previewUrl = file 
 ? URL.createObjectURL(file) 
 : "https://t3.ftcdn.net/jpg/01/74/44/62/360_F_174446259_iYCcLsC7BKaIlSKb7hScY80hNQdMpZgN.jpg"; 
function onSubmit()
{
    const documentRef = firebase.firestore().collection("posts").doc();
    const fileRef = firebase.storage().ref('post-images' + documentRef.id);
    const metadata = {
        contentType : file.type
    }
    fileRef.put(file,metadata).then(() =>{
        fileRef.getDownloadURL().then((imageUrl) => {
            documentRef.set({
                title,
                content,
                createtime: firebase.firestore.Timestamp.now(),
                author:{
                    displayName:firebase.auth().currentUser.displayName || "",
                    photoURL: firebase.auth().currentUser.photoURL || '',
                    uid:firebase.auth().currentUser.uid,
                    email: firebase.auth().currentUser.email,
                },
                imageUrl,
            }).then(() => {
                history.push('/');
            })
        })
    })
}
return (
<Container>
<Header>
    create post
</Header>
<Form onSubmit={onSubmit}>
    <Image 
     src = {previewUrl}
     size ="small" 
     floated = "left"
     />
    <Button basic as="label" htmlFor="post-image">add photo</Button>
    <Form.Input 
     type = "file" 
     id="post-image" 
     style={{display:'none'}} 
     onChange = {(e) => setFile(e.target.files[0])}
     />
    <Form.Input 
     placeholder="please enter your title."
     value={title}
     onChange={(e) => setTitle(e.target.value)}
     />
     <Form.TextArea 
     placeholder="please enter your content."
     value={content}
     onChange={(e) => setContent(e.target.value)}
     />
     <Form.Button> Post </Form.Button>
</Form>
</Container>);
}

export default NewPost;