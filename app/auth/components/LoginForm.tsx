'use client';
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Flex, TextField, Button } from "@radix-ui/themes";
import { yupResolver } from "@hookform/resolvers/yup";
import PasswordMaskField from './PasswordMaskField';
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

type FormData = {
  email: string;
  password: string;
};


export default function LoginForm() {
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
        <TextField.Root size="3" placeholder="Email address" className="w-full" {...register("email")} />
        <TextField.Root size="3" placeholder="Password" {...register("password")} />
        <PasswordMaskField />
        <Link href="/auth/forgot-password">
          <span className="w-full text-center text-foreground inline-block">
            Forgot password
          </span>
        </Link>
        <Button className="w-full" color="gray" type="submit">Login</Button>
      </Flex>
    </form>
  );
}