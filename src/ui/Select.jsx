import PropTypes from "prop-types";
import { forwardRef } from "react";
import SelectComponent from "react-select";

const Select = forwardRef(({ styles, width,...props}, ref) => {
  return (
    <SelectComponent
      ref={ref }
      {...props}
      styles={{
        ...styles,
        control: (props) => ({
          ...props,
          backgroundColor: "var(--color-black-300)",
          border: "none",
          boxShadow: "var(--shadow-md)",
          width: width
        }),
        menu: (props) => ({
          ...props,
          backgroundColor: "var(--color-black-300)",
          border: "none",
          width: "max-content"
        }),
        option: (styles, { isSelected }) => ({
          ...styles,
          backgroundColor: isSelected
            ? "var(--color-brand-700)"
            : "var(--color-black-300)",
          // color:
          //   isSelected
          //     ? "var(--color-grey-500)"
          //    "var(--color-grey-0)"
          //     : "var(--color-grey-700)",
          // // border: "none",
          ":hover": {
            backgroundColor: "var(--color-brand-700)",
            // color: "#fff",
          },
        }),
        singleValue: (styles) => ({
          ...styles,
          color: "var(--color-grey-400)",
          fontSize: "inherit",
        }),
      }}
    />
  );
});

Select.displayName = "Select";

Select.propTypes = {
  styles: PropTypes.object,
  width: PropTypes.string
}

export default Select;
