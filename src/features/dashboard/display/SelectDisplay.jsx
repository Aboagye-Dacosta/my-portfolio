import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../../ui/Button";
import Row from "../../../ui/Row";
import Select from "../../../ui/Select";
import Spacer from "../../../ui/Spacer";

function SelectDisplay({ options = [], onClick }) {
  const [selected, setSelected] = useState("");
  return (
    <Row type="horizontal" justify="end" items="center">
      <Select
        width="30rem"
        options={options}
        onChange={(value) => setSelected(value.value)}
      />
      <Spacer />
      <Button onClick={() => onClick(selected)} >Add</Button>
    </Row>
  );
}

SelectDisplay.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.array,
};

export default SelectDisplay;
