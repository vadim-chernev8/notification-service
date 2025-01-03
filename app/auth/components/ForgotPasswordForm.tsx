'use client';
import { useForm } from "react-hook-form";
import { Flex, TextField, Button } from "@radix-ui/themes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

type FormData = {
  email: string;
};

export default function ForgotPasswordForm() {
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
        <Button className="w-full" color="gray" type="submit">Send link</Button>
      </Flex>
    </form>
  );
}