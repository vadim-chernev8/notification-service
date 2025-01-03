'use client';
import { useForm } from "react-hook-form";
import { Flex, TextField, Button } from "@radix-ui/themes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  newPassword: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

type FormData = {
  password: string;
  newPassword: string;
};


export default function NewPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema), // Connect Yup schema
  });

  console.log(errors)

  const onSubmit = (data: FormData) => {
    console.log(data); // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="3" className="w-[340px]">
        <TextField.Root size="3" placeholder="Password" className="w-full" {...register("password")} />
        <TextField.Root size="3" placeholder="Confirm password" {...register("newPassword")} />
        <Button className="w-full" color="gray" type="submit">Save Password</Button>
      </Flex>
    </form>
  );
}