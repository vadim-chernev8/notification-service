'use client';
import Image from 'next/image';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { CalendarIcon, TriangleDownIcon, TriangleUpIcon, UploadIcon } from "@radix-ui/react-icons";
import img2 from '../../assets/img/IMG.svg';

const schema  = yup.object().shape(
    {
        name:yup.string().required("Promotion name is Required"),
        bannerText: yup.string().required(),
        buttonText: yup.string().required(),
        bannerUrl: yup.string().required(),
        order: yup.string().required(),
    }
)
type FormData = {
    name: string;
    bannerText: string;
    buttonText: string;
    bannerUrl: string;
    order: number;

};

export default function CarouselForm() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: { order: 1 },
    });
    const orderValue = watch("order");
    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    const handleIncrement = () => {
        setValue("order", Number(orderValue || 0) + 1);
    };

    const handleDecrement = () => {
        setValue("order", Math.max(1, Number(orderValue || 0) - 1));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mb-8">
            <Flex direction='row' style={{justifyContent:'space-between'}} className='p-4 gap-8'>
            <Flex  style={{ flex: 1 }} direction="column"  gap="3">
                <TextField.Root size="3" placeholder="Promotion name" className="w-full" {...register("name")} />
                <Flex direction='row' className='gap-4'>
                    <TextField.Root  size="3" className="w-full" placeholder="Display From: DD/MM/YYYY">
                        <TextField.Slot side="right">
                            <CalendarIcon className="h-5 w-5 text-gray-400" />
                        </TextField.Slot>
                    </TextField.Root>
                    <TextField.Root  size="3" className="w-full" placeholder="Display To: DD/MM/YYYY">
                        <TextField.Slot side="right">
                            <CalendarIcon className="h-5 w-5 text-gray-400" />
                        </TextField.Slot>
                    </TextField.Root>
                </Flex>

                <Flex justify='between' className='p-3' direction='row'  align="center" gap='3'>
                    <Text className='text-background'>Banner image:</Text>
                    <Text className='text-background'>No image Selected</Text>
                    <Button  className='bg-background'>Upload Image <UploadIcon/> </Button>
                </Flex>

                <TextField.Root size="3" placeholder="Banner Text" className="w-full" {...register("bannerText")} />
                <TextField.Root size="3" placeholder="Button Text" className="w-full" {...register("buttonText")} />
                <TextField.Root size="3"  placeholder="Banner Url" className="w-full" {...register("bannerUrl")} />
                    <TextField.Root size="3" placeholder="Select order"   value={orderValue || 1} className="w-full " {...register("order")} >
                        <TextField.Slot side='right'>
                            <Flex justify='center' className="flex flex-col ">
                                <Button
                                    type="button"
                                    onClick={handleIncrement}
                                    className=" pl-1 hover:bg-gray-200"
                                >
                                    <TriangleUpIcon className="w-2h-2 text-gray-300" />
                                </Button>
                                <Button
                                    type="button"
                                    onClick={handleDecrement}
                                    className="pl-1hover:bg-gray-200"
                                >
                                    <TriangleDownIcon className="w-2 h-2 text-gray-300" />
                                </Button>
                            </Flex>
                        </TextField.Slot>
                    </TextField.Root>
                <RadioGroup.Root
                    className="flex flex-row gap-2.5 mt-3"
                    defaultValue="default"
                    aria-label="View density"
                >
                    <Flex justify='center' >
                        <label
                            className="px-[15px] text-[15px] leading-none text-background"
                            htmlFor="r1"
                        >
                            Select status:
                        </label>
                    </Flex>
                    <Flex justify='center' >
                        <label
                            className="pr-[15px] text-[15px] leading-none text-background"
                            htmlFor="r1"
                        >
                            Active
                        </label>
                        <RadioGroup.Item
                            className="w-[15px] h-[15px] cursor-pointer rounded-full shadow-[0_2px_10px] shadow-blackA4 outline-none  ring-2 ring-background"
                            value="default"
                            id="r1"
                        >
                            <RadioGroup.Indicator className="relative flex w-full h-full items-center justify-center">
                                <div className="w-[11px] h-[11px] rounded-full bg-background" />
                            </RadioGroup.Indicator>
                        </RadioGroup.Item>
                    </Flex>
                    <Flex justify='center' >
                        <label
                            className="pr-[15px] text-[15px] leading-none text-background"
                            htmlFor="r2"
                        >
                            Inactive
                        </label>
                        <RadioGroup.Item
                            className="w-[15px] h-[15px] cursor-pointer rounded-full shadow-blackA4 ring-2 ring-background"
                            value="inactive"
                            id="r2"
                        >
                            <RadioGroup.Indicator className="relative flex w-full h-full items-center justify-center">
                                <div className="w-[11px] h-[11px] rounded-full bg-background" />
                            </RadioGroup.Indicator>
                        </RadioGroup.Item>
                    </Flex>
                </RadioGroup.Root>


                {/*<Button className="w-full" color="gray" type="submit">Create</Button>*/}
            </Flex>
                <Image
                    src={img2}
                    alt="Descriptive Text"
                    width={380}
                    height={288}
                    className="border-2 border-darkGrey rounded-lg "
                />
            </Flex>
        </form>
    );
}