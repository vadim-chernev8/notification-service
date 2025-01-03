'use client';
import { useForm } from "react-hook-form";
import { Flex, TextField, Button, Text, Checkbox } from "@radix-ui/themes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    roleName: yup.string().required("First name is Required"),
    manageUsers: yup.string().required(),
    carousel: yup.string().required(),
    staticPages: yup.string().required(),
    roles: yup.string().required(),
    games: yup.string().required(),
    imageLibrary: yup.string().required(),
    gameCategory: yup.string().required(),
    menu: yup.string().required(),
    audit: yup.string().required(),
});

type FormData = {
    roleName: string;
    manageUsers: string;
    carousel: string;
    staticPages: string;
    roles: string;
    games: string;
    imageLibrary: string;
    gameCategory: string;
    menu: string;
    audit: string;
};

export default function RolesForm() {
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
      <Flex direction="column" gap="3" className="w-full">
        <TextField.Root size="3" placeholder="Role name" className="w-full" {...register("roleName")} />
        <div className="grid grid-cols-3 gap-3">
            <Text as="label" size="2" className="col-span-1">
                <Flex gap="2">
                    <Checkbox defaultChecked {...register("manageUsers")} />
                    Manage Users:
                </Flex>
            </Text>
            <Text as="label" size="2" className="col-span-1">
                <Flex gap="2">
                    <Checkbox defaultChecked {...register("carousel")} />
                    Carousel:
                </Flex>
            </Text>
            <Text as="label" size="2" className="col-span-1">
                <Flex gap="2">
                    <Checkbox defaultChecked {...register("staticPages")} />
                    Static Pages:
                </Flex>
            </Text>
            <Text as="label" size="2" className="col-span-1">
                <Flex gap="2">
                    <Checkbox defaultChecked {...register("roles")} />
                    Roles:
                </Flex>
            </Text>
            <Text as="label" size="2" className="col-span-1">
                <Flex gap="2">
                    <Checkbox defaultChecked {...register("games")} />
                    Games:
                </Flex>
            </Text>
            <Text as="label" size="2" className="col-span-1">
                <Flex gap="2">
                    <Checkbox defaultChecked {...register("imageLibrary")} />
                    Image library:
                </Flex>
            </Text>
            <Text as="label" size="2" className="col-span-1">
                <Flex gap="2">
                    <Checkbox defaultChecked {...register("gameCategory")} />
                    Game Category: 
                </Flex>
            </Text>
            <Text as="label" size="2" className="col-span-1">
                <Flex gap="2">
                    <Checkbox defaultChecked {...register("menu")} />
                    Menu:
                </Flex>
            </Text>
            <Text as="label" size="2" className="col-span-1">
                <Flex gap="2">
                    <Checkbox defaultChecked {...register("audit")} />
                    Audit:
                </Flex>
            </Text>
        </div>
        <Button className="w-full" color="gray" type="submit">Create</Button>
      </Flex>
    </form>
  );
}
