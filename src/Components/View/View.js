import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext'

import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState()
  const { PostDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    const { userId } = PostDetails
    console.log(PostDetails);
    firebase.firestore().collection('users').where('id', '==', userId).get((res) => {
      res.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}
          alt="IMG"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {PostDetails.price} </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
        }
      </div>
    </div>
  );
}
export default View;
