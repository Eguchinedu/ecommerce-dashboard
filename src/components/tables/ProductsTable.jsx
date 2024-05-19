import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import "./table.scss";

const ProductsTable = () => {
  const { getAllItems, addNewProduct } = useContext(ProductContext);
  const [age, setAge] = React.useState("");
  const products = getAllItems();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 30) + "..." : str;
  };
  return (
    <div>
      <div className="table__header">
        <div className="action__buttons">
          <button className="action__btn add">
            <AddRoundedIcon />
            <p>Add</p>
          </button>
          <button className="action__btn delete">
            <DeleteOutlineRoundedIcon />
            <p>Delete</p>
          </button>
        </div>
        <div className="filter__action">
          <div className="filter__field">
            <select name="" id="">
              <option value=""></option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            
          </div>
          <div className="search__action">
          <input type="text" placeholder="Search"/>
          </div>
        </div>
      </div>
      <table>
        <tr>
          <th></th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Tags</th>
          <th>Actions</th>
        </tr>
        {products.map((prod) => (
          <tr key={prod.id}>
            <td>
              <input type="checkbox" name="" id={prod.id} />
            </td>
            <td>
              <img
                src={prod.imgsrc}
                alt={prod.title}
                style={{ width: "50px", height: "50px" }}
              />
            </td>
            <td>{prod.title}</td>
            <td>{prod.price}</td>
            <td>{truncate(prod.description)}</td>
            <td>
              {prod.tags.map((tag) => (
                <>{tag} ,</>
              ))}
            </td>
            <td>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <EditRoundedIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <DeleteOutlineRoundedIcon sx={{ color: "tomato" }} />
              </IconButton>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProductsTable;
