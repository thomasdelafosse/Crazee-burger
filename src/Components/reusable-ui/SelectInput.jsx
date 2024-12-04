import styled from "styled-components";

export default function SelectInput({ name, options, className, id }) {
  return (
    <SelectInputStyled name={name} className={className} id={id}>
      {options.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select``;
