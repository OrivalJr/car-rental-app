/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignLayoutRows(props) {
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
          d: "M3 2C2.44772 2 2 2.44772 2 3L2 8L16 8L16 3C16 2.44772 15.5523 2 15 2L3 2ZM18 3C18 1.34315 16.6569 0 15 0L3 0C1.34315 0 0 1.34315 0 3L0 15C0 16.6569 1.34315 18 3 18L15 18C16.6569 18 18 16.6569 18 15L18 3ZM16 10L2 10L2 15C2 15.5523 2.44772 16 3 16L15 16C15.5523 16 16 15.5523 16 15L16 10Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignLayoutRows")}
      {...rest}
    ></Icon>
  );
}