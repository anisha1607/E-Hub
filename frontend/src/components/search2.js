import React, { useState } from "react";
import "./SearchBar.css";
import { Image, Container, Form, Button, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import axios from "axios";

const createHistory = require("history").createBrowserHistory;

function SearchBar({ placeholder, data }) {
  const [data1,setData]=useState();
  const history = createHistory();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  function clickMe(item){
    localStorage.setItem("productClicked",JSON.stringify(item['item']));
    history.push("product");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  }
  
  function submitMe(item){
    localStorage.setItem("productSearched",JSON.stringify(item));
    history.push("producttype");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
    // console.log(filteredData)
    // history.push({
    //   pathname: 'producttype',
    //   state: filteredData,
    // });
    // let pathUrl = window.location.href;
    // window.location.href = pathUrl;

  }

  //const clickMe = value => alert(value.name);

  const sendPostRequest = async () => {
      try {
          const resp = await axios.post("http://localhost:9002/search",{});
          setData(resp.data,[]);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  };
  sendPostRequest();

  return (
    <>
    <div>
    <Form className="d-flex" style={{ marginRight: "4px", width: "430px !important" }}>
    <FormControl
      type="search"
      className="me-2 input-mysize"
      aria-label="Search"
      placeholder={placeholder}
      value={wordEntered}
      onChange={handleFilter}
    />
    <Button variant="outline-light" style={{ marginRight: "10px !important"}} onClick={()=>submitMe(filteredData)}>Search</Button>
    </Form>
    </div>
    {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((item) => {
            const { id, name} = item;
            return (
                <div key={id}>
              <a className="dataItem" target="_blank">
                <button style={{ border : "none",backgroundColor : "Transparent"}} onClick={()=>clickMe({item})}>{name}</button>
              </a>
              </div>
            );
          })}
        </div>
      )}
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