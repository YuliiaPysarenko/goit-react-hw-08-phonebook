import styled from 'styled-components';

const StyledForm = styled.form`
  border: 1px solid #000;
  padding: 10px;
  max-width: 400px;
`;

const Label = styled.label``;

const Input = styled.input`
  display: block;
  margin: 10px 0 20px;
  padding: 2px;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #c0bfbf;
  padding: 5px;
  cursor: pointer;
`;

export { StyledForm, Label, Input, Button };
