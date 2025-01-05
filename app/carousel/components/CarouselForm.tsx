'use client';
import Image from 'next/image';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Flex, TextField} from "@radix-ui/themes";
import * as RadioGroup from "@radix-ui/react-radio-group";

import {CalendarIcon, TriangleDownIcon, TriangleUpIcon, UploadIcon} from "@radix-ui/react-icons";
import img from '../../assets/img/img.png';

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

export default function CarouselForm(){
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
            <Flex style={{ flex: 1 }} direction="column"  gap="3">
                <TextField.Root size="3" placeholder="Promotion name" className="w-full" {...register("name")} />
                <Flex direction='row' className='gap-4'>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Display From: DD/MM/YYYY"
                            className="pr-10 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <CalendarIcon className="h-5 w-5 text-gray-400" />
                        </span>
                    </div>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Display To: DD/MM/YYYY"
                            className="pr-10 p-4 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <CalendarIcon className="h-5 w-5 text-gray-400" />
                        </span>
                    </div>
                </Flex>

                <Flex style={{justifyContent:'space-between'}} className='p-3' direction='row' justifyContent="space-between" alignItems="center" gap='3'>
                    <p className='text-[#707070]'>Banner image:</p>
                    <p className='text-[#707070]'>No image Selected</p>
                    <Button style={{backgroundColor:"#707070"}} className='bg-[#707070]'>Upload Image <UploadIcon/> </Button>
                </Flex>

                <TextField.Root size="3" placeholder="Banner Text" className="w-full" {...register("bannerText")} />
                <TextField.Root size="3" placeholder="Button Text" className="w-full" {...register("buttonText")} />
                <TextField.Root size="3"  placeholder="Banner Url" className="w-full" {...register("bannerUrl")} />
                <div className="flex justify-start w-full text-black border border-gray-300 rounded-md">
                    <input
                        {...register("order")}
                        value={orderValue || 1}
                        onChange={(e) =>
                            setValue("order", Number(e.target.value) || 1)
                        }
                        className="w-full  outline-none text-black p-2"
                    />
                    <div className="flex flex-col items-center">
                        <button
                            type="button"
                            onClick={handleIncrement}
                            className=" pl-2 hover:bg-gray-200"
                        >
                            <TriangleUpIcon style={{width:'25px', height:'25px', color:'#707070'}} />
                        </button>
                        <button
                            type="button"
                            onClick={handleDecrement}
                            className="pl-2 hover:bg-gray-200"
                        >
                            <TriangleDownIcon style={{width:'25px', height:'25px', color:'#707070'}}  />
                        </button>
                    </div>
                </div>
                <RadioGroup.Root
                    className="flex flex-row gap-2.5 mt-3"
                    defaultValue="default"
                    aria-label="View density"
                >
                    <div className="flex items-center">
                        <label
                            className="px-[15px] text-[15px] leading-none text-[#808080]"
                            htmlFor="r1"
                        >
                            Select status:
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label
                            className="pr-[15px] text-[15px] leading-none text-[#808080]"
                            htmlFor="r1"
                        >
                            Active
                        </label>
                        <RadioGroup.Item
                            className="w-[15px] h-[15px] cursor-pointer rounded-full shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 checked:bg-red ring-2 ring-[#707070]"
                            value="default"
                            id="r1"
                        >
                            <RadioGroup.Indicator className="relative flex w-full h-full items-center justify-center">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#707070]" />
                            </RadioGroup.Indicator>
                        </RadioGroup.Item>
                    </div>
                    <div className="flex items-center">
                        <label
                            className="pr-[15px] text-[15px] leading-none text-[#808080]"
                            htmlFor="r2"
                        >
                            Inactive
                        </label>
                        <RadioGroup.Item
                            className="w-[15px] h-[15px] cursor-pointer rounded-full shadow-blackA4 ring-2 ring-[#707070]"
                            value="comfortable"
                            id="r2"
                        >
                            <RadioGroup.Indicator className="relative flex w-full h-full items-center justify-center">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#707070]" />
                            </RadioGroup.Indicator>
                        </RadioGroup.Item>
                    </div>
                </RadioGroup.Root>


                {/*<Button className="w-full" color="gray" type="submit">Create</Button>*/}
            </Flex>
                <Image

                    src={img}
                    alt="Descriptive Text"
                    width={500}
                    height={100}
                    className="border-2 border-[#125560] rounded-lg "
                />
            </Flex>
        </form>
    );
}