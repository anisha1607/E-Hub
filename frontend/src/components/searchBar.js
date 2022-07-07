import React, { useState } from "react";
// import "./SearchBar.css";
import { Image, Container, Form, Button, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

const createHistory = require("history").createBrowserHistory;

function SearchBar({ placeholder, data }) {
  const [data1,setData]=useState();
  const history = createHistory();
//   const [filteredData, setFilteredData] = useState([]);
  const [product, setProduct] = useState("");

  const urlSubmit = (event) => {
    event.preventDefault();
  }

  const handleFilter = (event) => {
    const product = event.target.value;
    setProduct(product);
    // const newFilter = data.filter((value) => {
    //   return value.name.toLowerCase().includes(searchWord.toLowerCase());
    // });

    // if (searchWord === "") {
    //   setFilteredData([]);
    // } else {
    //   setFilteredData(newFilter);
    // }
  };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

  const clickMe = () => {
    // localStorage.setItem("productClicked",JSON.stringify(item['item']));
    // history.push("product");
    // let pathUrl = window.location.href;
    // window.location.href = pathUrl;
    axios.post("http://localhost:9002/search1", product)
    .then(res => {
          // setLoginUser(res.data.user)
          alert(res.data.message)
          localStorage.setItem("product", JSON.stringify(res.data.product));
          history.push("product");
          let pathUrl = window.location.href;
          window.location.href = pathUrl;
          console.log(history)
    })
  }
  
  //const clickMe = value => alert(value.name);

//   const sendPostRequest = async () => {
//       try {
//           const resp = await axios.post("http://localhost:9002/search1",{});
//           setData(resp.data,[]);
//       } catch (err) {
//           // Handle Error Here
//           console.error(err);
//       }
//   };
//   sendPostRequest();

  return (
    <>
    <Form className="d-flex" style={{ marginRight: "4px", width: "430px !important" }} onSubmit={urlSubmit}>
    <FormControl
      type="search"
      className="me-2 input-mysize"
      aria-label="Search"
      placeholder={placeholder}
      value={product}
      onChange={handleFilter}
    />
    <Button variant="outline-light" style={{ marginRight: "10px !important"}} onClick={()=>clickMe()}>Search</Button>
    </Form>
    {/* {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((item) => {
            const { id, name, price, image } = item;
            return (
                <div key={id}>
              <a className="dataItem" target="_blank">
                <button onClick={()=>clickMe({item})}>{name}</button>
              </a>
              </div>
            );
          })}
        </div>
      )} */}
      </>

    // <div className="search">
    //   <div className="searchInputs">
    //     <input
    //       type="text"
    //       placeholder={placeholder}
    //       value={wordEntered}
    //       onChange={handleFilter}
    //     />
    //     <div className="searchIcon">
    //       {filteredData.length === 0 ? (
    //         <SearchIcon />
    //       ) : (
    //         <CloseIcon id="clearBtn" onClick={clearInput} />
    //       )}
    //     </div>
    //   </div>
    //   {filteredData.length != 0 && (
    //     <div className="dataResult">
    //       {filteredData.map((item) => {
    //         const { id, name, price, image } = item;
    //         return (
    //             <div key={id}>
    //           <a className="dataItem" target="_blank">
    //             <button onClick={()=>clickMe({item})}>{name}</button>
    //           </a>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   )}
    // </div>
  );
}

export default SearchBar;