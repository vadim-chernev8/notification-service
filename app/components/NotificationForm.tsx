'use client';
import { useForm } from "react-hook-form";
import { Flex, TextField, Button, Text, Checkbox, TextArea } from "@radix-ui/themes";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
});

type FormData = {
    title: string;
    content: string;
};

type UserForm = {
    onSubmit: (data: FormData) => void;
}

export default function UserForm({ onSubmit }: UserForm) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema), // Connect Yup schema
    });

    const onSubmithandler = (data: FormData) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmithandler)}>
            <Flex direction="column" gap="3" className="w-[340px] m-auto">
                <TextField.Root size="3" placeholder="Title" className="w-full" {...register("title")} />
                <TextArea size="3" placeholder="Content" className="w-full" {...register("content")} />
                <Button className="w-full" type="submit">Publish</Button>
            </Flex>
        </form>
    );
}
