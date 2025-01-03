'use client';
import { useForm } from "react-hook-form";
import { Flex, TextField, Button, Text, Checkbox } from "@radix-ui/themes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is Required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required"),
  isActive: yup.string().required(),
});

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  isActive: string;
};

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema), // Connect Yup schema
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="3" className="w-[340px]">
        <TextField.Root size="3" placeholder="First name" className="w-full" {...register("firstName")} />
        <TextField.Root size="3" placeholder="Last name" {...register("lastName")} />
        <TextField.Root size="3" placeholder="Email" {...register("email")} />
        <Text as="label" size="2">
          <Flex gap="2">
            Is active status:
            <Checkbox defaultChecked {...register("isActive")} />
          </Flex>
        </Text>
        <Button className="w-full" color="gray" type="submit">Create</Button>
      </Flex>
    </form>
  );
}
