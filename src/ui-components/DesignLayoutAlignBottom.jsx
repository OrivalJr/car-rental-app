/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignLayoutAlignBottom(props) {
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
          d: "M8 2C7.44772 2 7 2.44772 7 3L7 11C7 11.5523 7.44772 12 8 12L10 12C10.5523 12 11 11.5523 11 11L11 3C11 2.44772 10.5523 2 10 2L8 2ZM5 3C5 1.34315 6.34315 0 8 0L10 0C11.6569 0 13 1.34315 13 3L13 11C13 12.6569 11.6569 14 10 14L8 14C6.34315 14 5 12.6569 5 11L5 3ZM0 17C0 16.4477 0.447715 16 1 16L17 16C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18L1 18C0.447715 18 0 17.5523 0 17Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignLayoutAlignBottom")}
      {...rest}
    ></Icon>
  );
}
