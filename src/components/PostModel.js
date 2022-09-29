import React , {useState} from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {storage} from "../firebase"
import db from "../firebase"
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"
import {addDoc, getDoc, query, orderBy, collection, serverTimestamp} from "firebase/firestore"
import {selectUser} from "../features/userSlice"
import {useSelector} from "react-redux"


const PostModel = (props) => {
  const [editText , setMsg] = useState("");
  const [imgShared , setImg] = useState();
  const [video, setVideo] = useState();
  const [data , setData] = useState();

  const User = useSelector(selectUser);

  const handleClose = (e) => {
    setImg("")
    setVideo("")
    setMsg("")
    setData("")
    props.handlePost(e)
  }

  const handleImg = (e) =>{
    console.log(e.target.files[0]);
    if(e.target.files[0] === undefined || e.target.files[0] === ""){
      alert("Please select a image")
    }
    setImg(e.target.files[0]);
  }

  const handleBtn = () =>{
    if(data === "images") {
      console.log("images");
      const storageRef = ref(storage, `images/${imgShared.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imgShared)
      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`upload is ${progress}% done`);
        switch(snapshot.state) {
          case 'paused' :
            console.log("upload is paused");
            break;
          case 'running' :
            console.log("upload is running");
            break;
        }

      },
      (error) => {
        console.log(error);
      },
      // () => {
      //   getDownloadURL(uploadTask.snapshot.ref).then((downLoadURl) => {
      //     console.log(`file available at ${downLoadURl}`)
      //   })
      // },
      async() => {
        const downLoadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const collectionRef = collection(db, "articles");
        const docRef = await addDoc(collectionRef, {
          description : editText,
          userName : User.name,
          userImg : User.img,
          img : downLoadURL,
          timestamp : serverTimestamp(),
        })

        console.log(`doc id is ${docRef.id}`)
      }

      )
    }
    else if(data === "videos") {
      console.log("videos");
      const collectionRef = collection(db, "articles");
      const docRef =  addDoc(collectionRef, {
        description : editText,
        userName : User.name,
        userImg : User.img,
        video : video,
        timestamp : serverTimestamp(),
      }) 
    }

    handleClose();
    
  }
  // console.log(imgShared);
  return (
    <>
    { 
      props.post === "open"  &&
    <Container>
    <Box>
    <Header>
      <p>Create a post</p>
      <button onClick={handleClose}>
      <img src="/assets/close-icon.svg" alt="" />
      </button>
    </Header>
    <UserInf>
    <img src="/assets/photo.svg" alt="" />
    <span>Rohan Shelar</span>
    </UserInf>
    <SharedBOx>


    <Editor>
    <textarea  id="" placeholder='What do you want to talk about?' value={editText} onChange={(e) => setMsg(e.target.value)}></textarea>
    </Editor>
    {
      data === "images" ? (
    <UploadImg>
    <input type="file" name="" id="images" accept='images/*'
       onChange={handleImg}  
    />
    <label htmlFor="images">Select Image</label>
    {
      imgShared && 
      <img src={URL.createObjectURL(imgShared)} alt="" />
    }
    </UploadImg>
      ) : (
        data === "videos" && (
    <UploadVid>
    <input type="text" name="" id="video" placeholder='please enter video link'
      onChange={(e) => setVideo(e.target.value)}
    />
    {
      video &&
      <ReactPlayer width={'100%'} url={video} />
    }
    </UploadVid>
    )
    )
    }
    </SharedBOx>
    <SharedTools>
    <Assets>
    <Btn onClick={() => setData("images")}>
    <img src="/assets/gallery.svg" alt="" />
    </Btn>
    <Btn onClick={() => setData("videos")}>
    <img src="/assets/video.svg" alt="" />
    </Btn>
    <Btn>
    <img src="/assets/document.svg" alt="" />
    </Btn>
    <Btn>
    <img src="/assets/share.svg" alt="" />
    </Btn>
    <Btn>
    <img src="/assets/celebrate.svg" alt="" />
    </Btn>
    <Btn>
    <img src="/assets/poll.svg" alt="" />
    </Btn>
    <Btn>
    <img src="/assets/anyone.svg" alt="" />
    Anyone
    </Btn>
    </Assets>
    <Postassets>
      <Post  disabled={!editText ? true : false} onClick={handleBtn}>
        Post
      </Post>
    </Postassets>
    </SharedTools>
    </Box>
    </Container>
    }
    </>
  )
}
const Container = styled.div`
position: fixed;
top : 0;
left: 0;
right: 0;
bottom: 0;
color: black;
z-index: 9999;
background-color: rgba(0,0,0,0.7);
`

const Box = styled.div`
background: #fff;
width: 100%;
max-width: 552px;
border-radius: 10px;
position: relative;
top: 32px;
margin: 0 auto;
max-height: 90%;
overflow: initial;
/* overflow: hidden; */
/* overflow-y: scroll; */
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px 20px;
border-bottom: 1px solid rgba(0,0,0,0.15);
p {
line-height: 1.5;
font-size: 18px;
font-weight: 500;
}
button {
  outline: none;
  border: none;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
}
`;

const UserInf = styled.div`
padding: 12px 24px;
display: flex;
align-items: center;
img {
  border-radius: 50%;
  margin-right: 5px;

}

`;


const Editor = styled.div`
padding: 0px 24px;

textarea {
  width: 100%;
  resize: none;
  /* height: 150px; */
  min-height: 100px;
  /* border: none;
  outline: none; */
  font-size: 15px;
  color: rgba(0,0,0,0.5);


}
`;


const SharedTools = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 12px 24px;

`;


const Btn = styled.button`
border: none;
outline: none;
background: #fff;
display: flex;
align-items: center;
margin-inline: 5px;
border-radius: 999px;
padding: 5px;
img {
  margin-right: 3px;
  /* width: 100%;
  height: 100%; */

}
&:hover {
  background-color: rgba(0,0,0,0.1);

}

&:last-child {
  padding: 10px 12px;
  
}
`;

const Assets = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
/* flex-grow: 1; */
`;

const Postassets = styled.div`


`;

const Post = styled.button`
padding: 10px 15px;
background-color: ${(props) => (props.disabled ? "rgba(0,0,0,0.1)" : "#0a66c2")};
color: ${(props) => (props.disabled ? "rgba(0,0,0,0.5)" : "#fff")};
border: none;
outline: none;
border-radius: 15px;
font-weight: 600;

`;

const UploadImg = styled.div`
/* background: red; */
text-align: center;
padding: 12px 24px;
padding-top: 0;
input {
  display: none;
}
label {
  text-align: center;
}
img {
  width: 100%;
}
`;

const UploadVid = styled.div`
padding: 12px 24px;
padding-top: 0;
padding-bottom: 0px;
input {
  width: 100%;
  padding: 10px 10px;
  margin-bottom: 10px;
}
`;

const SharedBOx = styled.div`
display: flex;
flex-direction: column;
overflow-y: auto;
flex-grow: 1;
overflow-y: scroll;
max-height: 400px;
vertical-align: baseline;
background: transparent;

&::-webkit-scrollbar {
  display: none;
}

`
export default PostModel