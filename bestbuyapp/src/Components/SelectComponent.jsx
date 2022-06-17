import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sort </InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Sort By</em>
        </MenuItem>
        <MenuItem value="Featured">Featured</MenuItem>
        <MenuItem value="est Selling">Best Selling</MenuItem>
        <MenuItem value="Price High to Low">Price High to Low</MenuItem>
        <MenuItem value="Price Low to High">Price Low to High</MenuItem>
        <MenuItem value="Customer Ratings">Customer Ratings</MenuItem>
        <MenuItem value="New Arraivals">New Arraivals</MenuItem>
        <MenuItem value="Brands A-Z">Brands A-Z</MenuItem>
        <MenuItem value="Brands Z-A">Brands Z-A</MenuItem>
      </Select>
    </FormControl>
  );
}
