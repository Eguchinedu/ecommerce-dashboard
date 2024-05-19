import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { ProductContext } from "../../context/ProductContext";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import InputBase from "@mui/material/InputBase";
import "./table.scss";
import { MenuItem, Select } from "@mui/material";
import { toast } from "react-toastify";
import AddProduct from "../products/modals/AddProduct";
import EditProduct from "../products/modals/EditProduct";

const headCells = [
  { id: "image", numeric: false, disablePadding: true, label: "Image" },
  { id: "title", numeric: false, disablePadding: false, label: "Title" },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  { id: "tags", numeric: false, disablePadding: false, label: "Tags" },
  { id: "price", numeric: true, disablePadding: false, label: "Price" },
  { id: "action", numeric: false, disablePadding: false, label: "Action" },
];

function createData(id, image, title, description, tags, price) {
  return { id, image, title, description, tags, price };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all products" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const {
    numSelected,
    handleSearch,
    searchQuery,
    // filterTag,
    // handleFilterTags,
    selectedTag,
    handleTagChange,
    handleDeleteSelected,
  } = props;
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Products
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDeleteSelected}>
            <DeleteIcon sx={{ color: "#ff6262" }} />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <Box sx={{ flex: "1 1 100%", display: "flex", alignItems: "center" }}>
            <Box
              component="form"
              sx={{ display: "flex", alignItems: "center", flexGrow: 1, mr: 2 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  border: "1px solid var(--border-color)",
                  borderRadius: "3px",
                  padding: "12px 20px",
                  width: "80%",
                }}
                placeholder="Search Products"
                inputProps={{ "aria-label": "search products" }}
                value={searchQuery}
                onChange={handleSearch}
              />
            </Box>
            <Select
              value={selectedTag}
              onChange={handleTagChange}
              displayEmpty
              inputProps={{ "aria-label": "Filter by tag" }}
              sx={{ minWidth: 120, mr: 2, padding: 0 }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="men">Men</MenuItem>
              <MenuItem value="women">Women</MenuItem>
              <MenuItem value="shoes">Shoes</MenuItem>
              <MenuItem value="gadgets">Gadgets</MenuItem>
              <MenuItem value="accessories">Accessories</MenuItem>
            </Select>
            <Tooltip title="Add Product">
              <button className="action__btn add" onClick={handleOpen}>
                <AddRoundedIcon />
                <p>Add</p>
              </button>
            </Tooltip>
            <AddProduct open={open} handleClose={handleClose}/>
          </Box>
        </>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  handleTagChange: PropTypes.func.isRequired,
  selectedTag: PropTypes.string.isRequired,
  handleDeleteSelected: PropTypes.func.isRequired,
};

export default function ProductTable() {
  const { getAllItems, addNewProduct, deleteProduct, deleteSelectedProducts } =
    React.useContext(ProductContext);
  const products = getAllItems();

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("title");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [form, setForm] = React.useState({
    title: "",
    description: "",
    price: "",
    tags: [],
    image: "",
  });
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedTag, setSelectedTag] = React.useState("all");
  const [filteredProducts, setFilteredProducts] = React.useState(products);
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = filteredProducts.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;


  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue);
    const filter = products.filter((product) =>
      product.title.toLowerCase().includes(inputValue)
    );
    setFilteredProducts(filter);
  };

  const handleDeleteSelected = () => {
    deleteSelectedProducts(selected);
    setSelected([]);
  };

  const handleTagChange = (e) => {
    const selectedTag = e.target.value.toLowerCase();
    setSelectedTag(selectedTag);

    if (selectedTag === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.tags.some((tag) => tag.toLowerCase() === selectedTag)
      );
      setFilteredProducts(filtered);
    }
  };
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, filteredProducts.length - page * rowsPerPage);

  const rows = filteredProducts.map((product) =>
    createData(
      product.id,
      product.imgsrc,
      product.title,
      product.description,
      product.tags,
      product.price
    )
  );
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 30) + "..." : str;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          selectedTag={selectedTag}
          handleTagChange={handleTagChange}
          handleDeleteSelected={handleDeleteSelected}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          onClick={(event) => handleClick(event, row.id)}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <img
                          src={row.image}
                          alt={row.title}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="left">
                        {truncate(row.description, 50)}
                      </TableCell>
                      <TableCell align="left">{row.tags.join(", ")}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="left">
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                          onClick={handleOpen}
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
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={filteredProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <EditProduct open={open} handleClose={handleClose} />
    </Box>
  );
}
