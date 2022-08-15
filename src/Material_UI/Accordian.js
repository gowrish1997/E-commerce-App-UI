import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import Confirmlogout from "../components/Confirmlogout";
import Paybutton from "../Stripe/Paybutton";
import { useraddressactions } from "../store/Useraddress";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";

const AdressContainer = styled.div`
  margin-top: -40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;

`;
const Newaddress = styled.div`
  position: relative;
  background-color: red;
  background-color: transparent;
  z-index: 2;

`;

const ExistingAddress = styled.div`
  height: auto;
  padding: 10px;
  background-color: transparent;

`;

const WholeAdress = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: transparent;
    left: 0;
    top: 0;
    z-index: -1;
    padding: 0px 10px;
  }
`;
const Address_button = styled.button`
  display: none;
  background-color: #ff6347;
  padding: 10px;
  width: 40%;
`;

const Input = styled.input`
  z-index: 1;
  &:checked + ${WholeAdress} ${Address_button} {
    display: block;
  }
  &:checked + ${WholeAdress}:after {
    background-color: #f0f8ff;
  }
`;
const Individual_adress = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: -26px;
  margin-right: -5px;
  box-sizing: border-box;
  line-height: 30px;
  align-items: center;
  letter-spacing: 1px;
  font-size: 20px;
  position: relative;
  background-color: transparent;
  z-index: 2;
`;

const Addressname = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  letter-spacing: 0.5px;
`;
const Addres = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.1px;
  font-size: 15px;
`;
const ShowAll = styled.div`
  background-color: blue;
  color: white;
  padding: 10px 30px;
  margin: 0px -27px;
  margin-top: 10px;
  margin-bottom: -10px;
`;
const Form = styled.form`
  background-color: transparent;
  z-index: 2;
  /* background-color: #87CEFA; */
  padding: 10px;
  box-sizing: border-box;

  width: 80%;
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #87cefa;
    z-index: -1;
  }
`;

const NewAddressinput = styled.input`
  padding: 10px 30px;
  margin: 10px;
`;
const Login = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const useStyles=makeStyles({
accord:{
  backgroundColor:"red",
  color:props=>props?"white":"black",
}
})
export default function Accordian() {
 const [show, setshow] = useState(false);
  const [addres, setAdress] = useState({ id: Math.random().toString() });
  const [addres1, setAdress1] = useState({});
  const [slice, setslice] = useState(5);
  const dispatch = useDispatch();
  const userAdresss = useSelector((state) => state.address);
  const user = useSelector((state) => state.user);
const data=useSelector((state)=>state.mode)
const classes=useStyles(data.mode)

  const addres_length = userAdresss.addresses.length;
  const submithandler = (e, condition) => {
    e.preventDefault();
    if (condition == "both") {
      dispatch(useraddressactions.setaddress(addres));
      dispatch(useraddressactions.setdeliveryaddres(addres));
    } else {
      dispatch(useraddressactions.setdeliveryaddres(addres1));
    }
  };

  const changehandler = (e) => {
    console.log(e.target.value);
    const id = e.target.value;
    const filter_addres = userAdresss.addresses.filter((item) => {
      return item.id == id;
    });
    setAdress1({ id: Math.random().toString(), ...filter_addres[0] });
  };

  const showall_handler = (e) => {
    setslice(addres_length);
  };
  const addressadd_handler = (e) => {
    return setAdress({
      ...addres,
      [e.target.name]: e.target.value,
    });
  };

  const addressonly_handler = () => {
    setslice(0);
  };
  const Logoutmodel_handler=()=>{
    setshow((prev)=>{
      return !prev
    })
  }
  
  return (
    <div>
      
      {show && <Confirmlogout handler={Logoutmodel_handler}></Confirmlogout>}
      <Accordion style={{ marginTop: "20px"}} className={classes.accord} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <button style={{ marginRight: "10px" }}>1</button>LOGIN<br></br>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Login>
              <div>
                User login with{" "}
                <span style={{ color: "teal" }}>{user.user.email}</span>
              </div>
              <div>
                <button
                  style={{ padding: "5px", backgroundColor: "teal" }}
                  onClick={Logoutmodel_handler}
                >
                  CHANGE
                </button>
              </div>
            </Login>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: "20px", padding: "0px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {" "}
            <button style={{ marginRight: "10px" }}>2</button>DELIVERY ADDRESS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AdressContainer>
            {" "}
            <ExistingAddress>
              {userAdresss.addresses.slice(0, slice).map((item) => {
                return (
                  <Individual_adress key={item.id}>
                    <Input
                      type="radio"
                      value={item.id}
                      name="address"
                      onChange={changehandler}
                    />
                    <WholeAdress>
                      <Addressname>
                        {" "}
                        <div>{item.name}</div>
                        <div style={{ marginLeft: "10px" }}>{item.phone}</div>
                      </Addressname>
                      <Addres>
                        {item.firstaddres},{item.district},{item.state},
                        {item.pincode}
                        <Address_button
                          onClick={(e) => submithandler(e, "only")}
                        >
                          DELIVERY HERE
                        </Address_button>
                      </Addres>
                    </WholeAdress>
                  </Individual_adress>
                );
              })}
              {addres_length > slice && (
                <ShowAll onClick={showall_handler}>
                  view all {addres_length} addresses
                </ShowAll>
              )}
            </ExistingAddress>
            <Newaddress>
              <Accordion
                style={{
                  backgroundColor: "transparent",
                  margin: "-16px",
                  marginTop: "0px",
                  padding: "0px",
                  zIndex: "2",
                }}
              >
                <AccordionSummary
                  style={{ backgroundColor: "transparent" }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  onClick={addressonly_handler}
                >
                  <Typography>
                    ADD ADDRESS<br></br>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "transparent" }}>
                  <Form>
                    <NewAddressinput
                      type="text"
                      placeholder="name"
                      name="name"
                      value={addres.name}
                      onChange={addressadd_handler}
                    ></NewAddressinput>
                    <NewAddressinput
                      type="text"
                      name="phone"
                      placeholder="10 digit mobile number"
                      value={addres.phone}
                      onChange={addressadd_handler}
                    ></NewAddressinput>
                    <NewAddressinput
                      type="text"
                      placeholder="pincode"
                      name="pincode"
                      value={addres.pincode}
                      onChange={addressadd_handler}
                    ></NewAddressinput>
                    <NewAddressinput
                      type="text"
                      placeholder="locality"
                      name="locality"
                      value={addres.locality}
                    ></NewAddressinput>
                    <NewAddressinput
                      style={{ width: "66%" }}
                      type="text"
                      placeholder="address"
                      name="firstaddres"
                      value={addres.address}
                      onChange={addressadd_handler}
                    ></NewAddressinput>
                    <NewAddressinput
                      type="text"
                      placeholder="district"
                      name="district"
                      value={addres.district}
                      onChange={addressadd_handler}
                    ></NewAddressinput>
                    <NewAddressinput
                      type="text"
                      placeholder="state"
                      name="state"
                      value={addres.state}
                      onChange={addressadd_handler}
                    ></NewAddressinput>
                    <div style={{ marginLeft: "10px" }}>
                      <button
                        type="submit"
                        onClick={(e) => submithandler(e, "both")}
                        style={{ padding: "10px", backgroundColor: "#FF6347" }}
                      >
                        SAVE AND DELIVERY HERE
                      </button>
                    </div>
                  </Form>
                </AccordionDetails>
              </Accordion>
            </Newaddress>
          </AdressContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: "20px" }} className={classes.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            {" "}
            <button style={{ marginRight: "10px" }}>3</button>PAYMENT OPTIONS
          </Typography>
          <Paybutton></Paybutton>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
