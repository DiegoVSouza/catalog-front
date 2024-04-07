import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { CgDanger } from "react-icons/cg";
import { InputHTMLAttributes } from "react";
import { Box, Flex, FormErrorMessage, FormLabel, Input, ResponsiveValue, Text, useColorMode } from "@chakra-ui/react";
import './InputComponent.css'

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement> {
    labelName: string;
    inputName: string;
    width?: string;
    register: UseFormRegister<any>;
    errors: FieldErrors;
}

export default function InputComponent({
    labelName,
    inputName,
    width,
    register,
    errors,
    ...props
}: InputComponentProps) {
    const { colorMode } = useColorMode();

    const { size: propSize, ...restProps } = props;
    return (
        <Box
            as="section"
            width={width ? width : 'auto'}
            className={
                errors[inputName]
                    ? "inputError"
                    : "inputComponent"
            }
        >
            <FormLabel
                color={colorMode === "light" ? "black !important" : "white !important"}
                fontWeight={'bold'}
            >
                {labelName}
            </FormLabel>

            <Input
                {...restProps}
                size={propSize ? String(propSize): undefined}
                onInput={props.onInput}
                {...register(`${inputName}`)}
            />

            {errors[inputName]?.message && (
                <Flex w='100%' gap='0.5rem' alignItems='center'>
               <CgDanger color="red" size={18} /> <Text>{errors[inputName]?.message as string}</Text> 
                </Flex>
            )}
        </Box>
    );
}
