import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Dropdown = ({ label, value, onSelectChange, options, size }) => {
  return (
    <FormControl size={size ? size : "small"}>
      <InputLabel id={"select-" + label + "-label"}> {label} </InputLabel>
      <Select
        id={"select-" + label}
        labelId={"select-" + label + "-label"}
        label={label}
        value={JSON.stringify(value)}
        onChange={onSelectChange}
      >
        {options.map((opt, idx) => (
          <MenuItem key={idx} value={JSON.stringify(opt)}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
