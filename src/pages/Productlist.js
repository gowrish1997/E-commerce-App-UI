import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Announcement from "../components/Announcement";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { Paper } from "@material-ui/core";
const Container = styled.div``;
const Filter_container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const Filter = styled.div`
  display: flex;
`;
const Filtertext = styled.div``;
const Select = styled.select`
  margin-left: 10px;
`;
const Option = styled.option`
  background-color: transparent;
`;
const Productlist = () => {
  const param = useParams();
  const [filters, setfilters] = useState({});
  const [sort, setsort] = useState();
  const handlefilter = (e) => {
    setfilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Navigation></Navigation>
      <Announcement></Announcement>
      <Filter_container>
        <Filter>
          <Filtertext>Filter Products:</Filtertext>

          <Select name="color" onChange={handlefilter}>
            <Option disabled selected value>
              {" "}
              -- select an option --{" "}
            </Option>
            <Option>black</Option>
            <Option>yellow</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>orange</Option>
          </Select>

          <Select name="size" onChange={handlefilter}>
            <Option label=" "></Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL LARGE</Option>
          </Select>
        </Filter>
        <Filter>
          <Filtertext>Sorts Product:</Filtertext>
          <Select name="sort" onChange={(e) => setsort(e.target.value)}>
            <Option defaultValue>sort</Option>
            <Option>ASCENDING</Option>
            <Option>NEWEST</Option>
            <Option>DESCENDING</Option>
          </Select>
        </Filter>
      </Filter_container>
      <Product
        category={param.category}
        filters={filters}
        sort={sort}
      ></Product>

      <Newsletter></Newsletter>
      <Footer></Footer>
    </Container>
  );
};
export default Productlist;
