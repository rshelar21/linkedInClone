import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostModel from './PostModel';
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from "react-redux"
import { selectUserName, selectUserPhoto } from "../features/userSlice"
import { collection, getDocs, query, orderBy, setDoc } from "firebase/firestore"
import db from "../firebase"



const MiddlePage = () => {
  const [post, setPost] = useState("close");
  const [data, setData] = useState([]);
  const UserPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    const getData = async () => {
      const collectionRef = collection(db, "articles");
      const queryRef = query(collectionRef, orderBy("timestamp", "desc"));
      const docRef = await getDocs(queryRef);
      setData(docRef.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    }

    getData();
  }, [data])

  const handlePost = (e) => {
    switch (post) {
      case "open":
        setPost("close");
        document.body.style.overflow = "unset";
        break;
      case "close":
        setPost("open");
        document.body.style.overflow = "hidden";
        break;
      default:
        setPost("close");
        break;

    }
  }

  console.log(data)
  return (
    <Main>
      <Container>
        <InnerDiv>
          {
            UserPhoto ?
              (<img src={UserPhoto} alt="" />) :
              (<img src="/assets/photo.svg" alt="" />)
          }
          <button onClick={handlePost}>Have a topic that excites you? Post about it</button>
        </InnerDiv>
        <Sections>
          <button>
            <img src="/assets/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/assets/video-icon.svg" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/assets/event-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/assets/artical-icon.svg" alt="" />
            <span>Write artical</span>
          </button>
        </Sections>
      </Container>


      {
        data.map((item, index) => {
          return (
            <Post key={item.id}>
              <User>
                <Bio>
                  <img src={item.data.userImg} alt="" />
                  <Name>
                    <p>{item.data.userName}</p>
                    {/* <span>{item.data.}</span> */}
                  </Name>
                </Bio>

                <img src="/assets/dots-icon.svg" alt="" />
              </User>
              <Descrip>
                <p>{item.data.description}</p>
              </Descrip>
              <SharedImg>
                <img src={item.data.img} alt="" />
              </SharedImg>
              {
                item.data.video  &&
                <ReactPlayer width={"100%"} url={item.data.video} />
              }
              <SharedImg>

              </SharedImg>
              <Comments>
                <div>
                  <img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="" />
                  <img src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="" />
                  <a href="">
                    55
                  </a>
                </div>
                <a href="#">
                  <span>100 comments</span>
                  <span>141 shares</span>
                </a>
              </Comments>
              <ActionBtn>
                <button>
                  <img src="/assets/like-icon.svg" alt="" />
                  <span>Like</span>
                </button>
                <button>
                  <img src="/assets/comment-icon.svg" alt="" />
                  <span>Comment</span>
                </button>
                <button>
                  <img src="/assets/share-icon.svg" alt="" />
                  <span>Share</span>
                </button>
                <button>
                  <img src="/assets/send-icon.svg" alt="" />
                  <span>Send</span>
                </button>
              </ActionBtn>
            </Post>
          )
        })

      }
      {/* <Post>

        <User>
          <Bio>
            <img src="/assets/photo.svg" alt="" />
            <Name>
              <p>Rohan SHelar</p>
              <span>21h </span>
            </Name>
          </Bio>

          <img src="/assets/dots-icon.svg" alt="" />
        </User>
        <Descrip>
          <p>150 bill</p>
        </Descrip>
        <SharedImg>
          <img src="/assets/shared1.jpg" alt="" />
        </SharedImg>
        <Comments>
          <div>
            <img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="" />
            <img src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="" />
            <a href="">
              55
            </a>
          </div>
          <a href="#">
            <span>100 comments</span>
            <span>141 shares</span>
          </a>
        </Comments>
        <ActionBtn>
          <button>
            <img src="/assets/like-icon.svg" alt="" />
            <span>Like</span>
          </button>
          <button>
            <img src="/assets/comment-icon.svg" alt="" />
            <span>Comment</span>
          </button>
          <button>
            <img src="/assets/share-icon.svg" alt="" />
            <span>Share</span>
          </button>
          <button>
            <img src="/assets/send-icon.svg" alt="" />
            <span>Send</span>
          </button>
        </ActionBtn>
      </Post> */}

      <PostModel post={post} handlePost={handlePost} />
    </Main>
  )
}
const Main = styled.div`
/* background: yellow; */
grid-area: "MiddlePage";
`;

const Container = styled.div`
margin-bottom: 15px;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
border-radius: 10px;
background-color: #fff;
padding: 10px;
`;

const InnerDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
/* padding: 10px; */

img {
  border-radius: 50%;
  margin-right: 5px;
  width: 50px;
  height: 50px;
}
button {
  flex-grow: 1;
  padding: 15px 15px;
  text-align: center;
  outline: none;
  background: transparent;
  border: 1px solid rgba(0,0,0,0.5);
  text-align: left;
  border-radius: 999px;
  color: rgba(0,0,0,0.4);
  font-weight: 600;

  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
}

`
const Sections = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
/* padding: 10px; */
/* padding-top: 0;
padding-inline: 15px;
padding-bottom: 10px; */
button {
  outline: none;
  border: none;
  background: transparent;
  display : flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  /* flex-grow: 1; */

  img {
    margin-right: 10px;
    @media (max-width: 500px) {
      margin-right: 7px;
  }
  }


  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
  @media (max-width: 500px) {
  padding : 10px 7px;
  }

}


`

const Post = styled.div`
margin-bottom: 8px;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
border-radius: 10px;
background-color: #fff;

`;

const User = styled.div`
padding: 10px;
display: flex;
align-items: flex-start;
justify-content: space-between;
`

const Bio = styled.div`
display: flex;
img 
{
  width: 50px;
  height: 50px;
  margin-right: 5px;
 
}
`

const Name = styled.div`
font-size: 13px;
padding-top: 5px;
/* color: rgba(0,0,0,0.6); */
p {
  color: rgba(0,0,0,0.5);
  font-weight: 600;
  font-size: 14px;
}
span {
  font-size: 11px;
  font-weight: 400;
  color: rgba(0,0,0,0.5);
}
`

const Descrip = styled.div`
padding: 0 10px;
padding-bottom: 10px;
font-size: 14px;
font-weight: 400;
color: rgba(0,0,0,0.5);
color: #000;
`
const SharedImg = styled.div`
display : block;
width: 100%;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
video {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
`;

const Comments = styled.div`
display : flex;
align-items: center;
justify-content: space-between;
padding: 10px;
border-bottom: 1px solid rgba(0,0,0,0.1);

&  > div {
display : flex;
align-items: center;
}
a {
  text-decoration: none;
  font-size : 13px;
  color: rgba(0,0,0,0.5);

  &:hover {
    text-decoration: underline;
    color: #0a66c2;
  }
}
span {
  margin-right: 5px;
}
`;

const ActionBtn = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:  10px;
padding-bottom: 5px;
button {
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background: transparent;
  display : flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;

  img {
    margin-right: 10px;
    @media (max-width: 500px) {
      margin-right: 7px;
  }
  }


  &:hover {
    background-color: rgba(0,0,0,0.1);
  }

  @media (max-width: 500px) {
  padding : 10px 7px;
  }

}
`
export default MiddlePage