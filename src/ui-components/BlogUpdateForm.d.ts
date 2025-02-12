/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Blog, Post } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogUpdateFormInputValues = {
    name?: string;
    posts?: Post[];
    cnpj?: string;
    ender?: string;
    bairro?: string;
};
export declare type BlogUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    posts?: ValidationFunction<Post>;
    cnpj?: ValidationFunction<string>;
    ender?: ValidationFunction<string>;
    bairro?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogUpdateFormOverridesProps = {
    BlogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    posts?: PrimitiveOverrideProps<AutocompleteProps>;
    cnpj?: PrimitiveOverrideProps<TextFieldProps>;
    ender?: PrimitiveOverrideProps<TextFieldProps>;
    bairro?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blog?: Blog;
    onSubmit?: (fields: BlogUpdateFormInputValues) => BlogUpdateFormInputValues;
    onSuccess?: (fields: BlogUpdateFormInputValues) => void;
    onError?: (fields: BlogUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BlogUpdateFormInputValues) => BlogUpdateFormInputValues;
    onValidate?: BlogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogUpdateForm(props: BlogUpdateFormProps): React.ReactElement;
