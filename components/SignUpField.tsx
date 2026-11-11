"use client";

import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type PropTypes = {
  id: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
};

const SignUpField: React.FC<PropTypes> = ({
  id,
  placeholder,
  type,
  label,
  onChange,
  value,
}) => {
  return (
    <FormControl isRequired id={id}>
      <FormLabel color={"gray.300"}>{label}</FormLabel>
      <Input
        name={id}
        placeholder={placeholder}
        type={type}
        bg={"whiteAlpha.100"}
        border={0}
        color={"white"}
        focusBorderColor="red.400"
        _placeholder={{
          color: "gray.300",
          opacity: 0.7,
        }}
        onChange={onChange}
        value={value}
      />
    </FormControl>
  );
};

export default SignUpField;
