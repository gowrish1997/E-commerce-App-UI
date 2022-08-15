import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { Card, Paper } from "@material-ui/core";
import { modeaction } from "../store/darkmode";
import { Settings } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import styled from "styled-components";
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 50,
    height: 30,
    padding: 3,
    display: "flex",
  },
  switchBase: {
    padding: 6,
    // color: theme.palette.grey[500],
    color: "transparent",

    "&$checked": {
      transform: "translateX(1px)",
      //   color: theme.palette.common.white,
      color: "black",
      color: "transparent",
      "& + $track": {
        opacity: 1,
        // backgroundColor: "black",
        // borderColor: theme.palette.primary.main,
         backgroundColor: "transparent",
        borderColor: "transparent",
      },
    },
  },
  thumb: {
    width: 20,
    height: 20,

    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 100 / 1,
    opacity: 1,
    backgroundColor: "white",
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  checked: {},
}))(Switch);
const useStyles=makeStyles({
  setting:{
    height: "200px",
    width:"200px"
  }
})
const Mode=styled.div`

`
export default function Dark_mode() {
  const data = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    
    dispatch(modeaction.modehandler())
  };
const classes=useStyles();
  return (
    // <Paper style={{ marginLeft:"10px",backgroundColor:"transparent"}}>
     // {/* <FormGroup style={{ padding: "5px","position":"relative"}}> */}
      <div style={{ marginLeft:"10px",marginBottom:'10px'}}>
        <div style={{"position":"absolute",height:"100%"}} >
          {!data.mode?<DarkModeIcon style={{fontSize:"40px"}}></DarkModeIcon>:<Brightness4Icon style={{fontSize:"40px"}}></Brightness4Icon>}
        </div>
        <Typography component="div" >
          <Grid component="label" container alignItems="center" spacing={1} >
            <Grid item>
              <AntSwitch 
                checked={data.mode}
                onChange={handleChange}
                name="checkedC"
              />
            </Grid>
          </Grid>
        </Typography>
      {/* </FormGroup> */}
    {/* // </Paper> */}
    </div>
  );
}
