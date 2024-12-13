/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignLayoutAlignTop(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M0 1C0 0.447715 0.447715 0 1 0L17 0C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2L1 2C0.447715 2 0 1.55228 0 1ZM8 6C7.44772 6 7 6.44772 7 7L7 15C7 15.5523 7.44772 16 8 16L10 16C10.5523 16 11 15.5523 11 15L11 7C11 6.44772 10.5523 6 10 6L8 6ZM5 7C5 5.34315 6.34315 4 8 4L10 4C11.6569 4 13 5.34315 13 7L13 15C13 16.6569 11.6569 18 10 18L8 18C6.34315 18 5 16.6569 5 15L5 7Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignLayoutAlignTop")}
      {...rest}
    ></Icon>
  );
}
