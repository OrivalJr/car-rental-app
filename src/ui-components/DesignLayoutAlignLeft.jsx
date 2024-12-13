/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignLayoutAlignLeft(props) {
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
          d: "M1 0C1.55228 0 2 0.447715 2 1L2 17C2 17.5523 1.55228 18 1 18C0.447715 18 0 17.5523 0 17L0 1C0 0.447715 0.447715 0 1 0ZM7 7C6.44772 7 6 7.44772 6 8L6 10C6 10.5523 6.44772 11 7 11L15 11C15.5523 11 16 10.5523 16 10L16 8C16 7.44772 15.5523 7 15 7L7 7ZM4 8C4 6.34315 5.34315 5 7 5L15 5C16.6569 5 18 6.34315 18 8L18 10C18 11.6569 16.6569 13 15 13L7 13C5.34315 13 4 11.6569 4 10L4 8Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignLayoutAlignLeft")}
      {...rest}
    ></Icon>
  );
}
