import React, { useState } from "react";

import styled from "styled-components";
import { AddAPhoto } from "@material-ui/icons";
const Profile_container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Image_container = styled.div`
  position: relative;
  height: 30vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid black;
`;
const Add_photo = styled.div`
  background-color: #b8b8b8;
  opacity: 0.9;
  position: absolute;
  border-radius: 80%;
  height: 90%;
  width: 20%;
`;
const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 20%;
`;
const Info_container = styled.div`
  background-image: linear-gradient(to right, #bdc3c7, #2c3e50);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 30%;
  margin-top: 10px;
`;
const Form = styled.form``;
const Input = styled.input`
  width: 350px;
  padding: 10px;
  box-sizing: border-box;
`;
const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const Profiler = (props) => {
  const [show, setshow] = useState(true);
  const show_handler = (e) => {
    e.preventDefault();
    setshow((Prev) => {
      return !Prev;
    });
    if (e.target.value == "save") {
      console.log("heelo");
      props.submithandler(e);
    }
  };
  const profilechnage_handler = (e) => {
    // setProfileobject((prev) => {
    //   return {
    //     ...prev,
    //     [e.target.name]: e.target.value,
    //   };
    // });
  };
  const profilechnage_handler1 = (e) => {
    // console.log(e.target.files[0]);
    // const { files } = e.target;
    // const localImageUrl = window.URL.createObjectURL(files[0]);
    // setProfileobject((prev) => {
    //   return {
    //     ...prev,
    //     [e.target.name]: localImageUrl,
    //   };
    // });
  };
console.log(props.object)
  return (
    <Profile_container>
      <Image_container>
        <Image src={props.object.image}></Image>
        {!show && <Add_photo>
          <form>
            <label style={{'cursor':"pointer"}}>
            <AddAPhoto></AddAPhoto>
            <Input
              type="file"
              placeholder="choose image"
              name="image"
              onChange={props.profilechnage_handler1}
              style={{"display":"none"}}
            ></Input>
            </label>
          </form>
         </Add_photo> }
      </Image_container>
      <Info_container>
        <Form>
          <Label> First Name:</Label>
          <br></br>
          <Input
            type="text"
            placeholder="First Name"
            name="fname"
            onChange={props.profilechnage_handler}
            readOnly={show}
            value={props.object.fname}
          ></Input>
          <br></br> <br></br>
          <Label>Last Name:</Label>
          <br></br>
          <Input
            type="text"
            placeholder="Last Name"
            name="lname"
            onChange={props.profilechnage_handler}
            readOnly={show}
            value={props.object.lname}
          ></Input>
          <br></br> <br></br>
          <Label>Phone No:</Label>
          <br></br>
          <Input
            type="number"
            placeholder="Phone No"
            name="phone"
            onChange={props.profilechnage_handler}
            readOnly={show}
            value={props.object.phone}
          ></Input>
          <br></br> <br></br>
          <Label>Gmail:</Label>
          <br></br>
          <Input
            type="email"
            placeholder="Gmail"
            name="email"
            onChange={props.profilechnage_handler}
            readOnly={show}
            value={props.object.email}
          ></Input>
          <br></br> <br></br>
          <Label>DOB</Label>
          <br></br>
          <Input
            type="date"
            placeholder="Date Of Birth"
            name="DOB"
            onChange={props.profilechnage_handler}
            readOnly={show}
            value={props.object.DOB}
          ></Input>
          <br></br> <br></br>
          <Label>Age</Label>
          <br></br>
          <Input
            type="text"
            placeholder="Age"
            name="age"
            onChange={props.profilechnage_handler}
            readOnly={show}
            value={props.object.age}
          ></Input>
          <br></br> <br></br>
          {show ? (
            <button
              style={{
                marginLeft: "100px",
                marginTop: "10PX",
                padding: "5px 10px",
                backgroundColor: "teal",
                borderRadius: "10PX",
              }}
              value="editprofile"
              onClick={show_handler}
            >
              Edit profile
            </button>
          ) : (
            <button
              type="submit"
              style={{
                marginLeft: "100px",
                marginTop: "10PX",
                padding: "5px 10px",
                backgroundColor: "teal",
                borderRadius: "10PX",
              }}
              value="save"
              onClick={show_handler}
            >
              save and update
            </button>
          )}
        </Form>
      </Info_container>
    </Profile_container>
  );
};

export default Profiler;
