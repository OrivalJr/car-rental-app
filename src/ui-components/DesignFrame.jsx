/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignFrame(props) {
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
          d: "M4 0C4.55228 0 5 0.447715 5 1L5 3L13 3L13 1C13 0.447715 13.4477 0 14 0C14.5523 0 15 0.447715 15 1L15 3L17 3C17.5523 3 18 3.44772 18 4C18 4.55228 17.5523 5 17 5L15 5L15 13L17 13C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15L15 15L15 17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17L13 15L5 15L5 17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17L3 15L1 15C0.447715 15 0 14.5523 0 14C0 13.4477 0.447715 13 1 13L3 13L3 5L1 5C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3L3 3L3 1C3 0.447715 3.44772 0 4 0ZM5 5L5 13L13 13L13 5L5 5Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignFrame")}
      {...rest}
    ></Icon>
  );
}
