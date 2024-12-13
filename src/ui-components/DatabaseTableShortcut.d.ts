/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DatabaseTableShortcutOverridesProps = {
    DatabaseTableShortcut?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type DatabaseTableShortcutProps = React.PropsWithChildren<Partial<IconProps> & {
    overrides?: DatabaseTableShortcutOverridesProps | undefined | null;
}>;
export default function DatabaseTableShortcut(props: DatabaseTableShortcutProps): React.ReactElement;
