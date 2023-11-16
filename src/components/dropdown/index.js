import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Dropdown = ({ label, default_option, onSelectChange, options, size }) => {
  return (
    <FormControl size={size ? size : "small"}>
      <InputLabel id={"select-" + label + "-label"}> {label} </InputLabel>
      <Select
        id={"select-" + label}
        labelId={"select-" + label + "-label"}
        label={label}
        value={default_option}
        onChange={onSelectChange}
      >
        {options.map((opt) => (
          <MenuItem key={opt.id} value={opt}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
