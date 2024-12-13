/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignMask(props) {
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
          d: "M3 2C2.44772 2 2 2.44772 2 3L2 15C2 15.5523 2.44772 16 3 16L15 16C15.5523 16 16 15.5523 16 15L16 3C16 2.44772 15.5523 2 15 2L3 2ZM0 3C0 1.34315 1.34315 0 3 0L15 0C16.6569 0 18 1.34315 18 3L18 15C18 16.6569 16.6569 18 15 18L3 18C1.34315 18 0 16.6569 0 15L0 3ZM9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7ZM5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13C6.79086 13 5 11.2091 5 9Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignMask")}
      {...rest}
    ></Icon>
  );
}
