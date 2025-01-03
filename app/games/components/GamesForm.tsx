'use client';
import { useForm } from "react-hook-form";
import { Flex, TextField, Button, Text, Checkbox, TextArea, Select } from "@radix-ui/themes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("First name is Required"),
  description: yup.string().required("Last name is required"),
  type: yup.string().required("Email is required"),
  category: yup.string().required(),
  thumbnail: yup.string().required(),
  altText: yup.string().required(),
  urlSlug: yup.string().required(),
  breadcrumbs: yup.string().required(),
  hrefLang: yup.string().required(),
  canonical: yup.string().required(),
  title: yup.string().required(),
  content: yup.string().required()
});

type FormData = {
  name: string;
  description: string;
  type: string;
  category: string;
  thumbnail: string;
  altText: string;
  urlSlug: string;
  breadcrumbs: string;
  hrefLang: string;
  canonical: string;
  title: string;
  content: string;
};

export default function GamesForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
      <Flex direction="column" gap="3">
        <TextField.Root size="3" placeholder="Game name" className="w-full" {...register("name")} />
        <TextArea size="3" placeholder="Game description" className="w-full" {...register("description")} />
        <Select.Root defaultValue="apple" {...register("type")}>
          <Select.Trigger color="indigo" variant="surface" />
          <Select.Content color="indigo">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>
        <Select.Root defaultValue="apple" {...register("category")}>
          <Select.Trigger color="indigo" variant="surface" />
          <Select.Content color="indigo">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>
        <Select.Root defaultValue="apple" {...register("thumbnail")}>
          <Select.Trigger color="indigo" variant="surface" />
          <Select.Content color="indigo">
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Content>
        </Select.Root>
        <TextField.Root size="3" placeholder="Alt text" className="w-full" {...register("altText")} />
        <TextField.Root size="3" placeholder="Url slug" className="w-full" {...register("urlSlug")} />
        <TextField.Root size="3" placeholder="Breadcrums" className="w-full" {...register("breadcrumbs")} />
        <TextField.Root size="3" placeholder="Href Lang" className="w-full" {...register("hrefLang")} />
        <TextField.Root size="3" placeholder="Canonical" className="w-full" {...register("canonical")} />
        <TextField.Root size="3" placeholder="Title" className="w-full" {...register("title")} />
        <TextArea size="3" placeholder="Content" className="w-full" {...register("content")} />
        <Button className="w-full" color="gray" type="submit">Create</Button>
      </Flex>
    </form>
  );
}
