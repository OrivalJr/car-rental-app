/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignLayoutAlignRight(props) {
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
          d: "M17 0C17.5523 0 18 0.447715 18 1L18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17L16 1C16 0.447715 16.4477 0 17 0ZM3 7C2.44772 7 2 7.44772 2 8L2 10C2 10.5523 2.44772 11 3 11L11 11C11.5523 11 12 10.5523 12 10L12 8C12 7.44772 11.5523 7 11 7L3 7ZM0 8C0 6.34315 1.34315 5 3 5L11 5C12.6569 5 14 6.34315 14 8L14 10C14 11.6569 12.6569 13 11 13L3 13C1.34315 13 0 11.6569 0 10L0 8Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignLayoutAlignRight")}
      {...rest}
    ></Icon>
  );
}
