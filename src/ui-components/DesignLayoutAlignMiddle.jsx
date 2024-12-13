/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignLayoutAlignMiddle(props) {
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
          d: "M8 2C7.44772 2 7 2.44772 7 3L7 11C7 11.5523 7.44772 12 8 12L10 12C10.5523 12 11 11.5523 11 11L11 3C11 2.44772 10.5523 2 10 2L8 2ZM13 6L13 3C13 1.34315 11.6569 0 10 0L8 0C6.34315 0 5 1.34315 5 3L5 6L1 6C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8L5 8L5 11C5 12.6569 6.34315 14 8 14L10 14C11.6569 14 13 12.6569 13 11L13 8L17 8C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6L13 6Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignLayoutAlignMiddle")}
      {...rest}
    ></Icon>
  );
}
