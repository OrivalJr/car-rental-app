/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignBoxModel(props) {
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
          d: "M3.41438 2L5.41424 4L12.5858 4L14.5858 2L3.41438 2ZM16 3.41418L14 5.41421L14 12.5858L16 14.5858L16 3.41418ZM14.5858 16L12.5858 14L5.41423 14L3.41435 16L14.5858 16ZM2 14.5859L4 12.5858L4 5.41419L2 3.41404L2 14.5859ZM6 6L6 12L12 12L12 6L6 6ZM0 3C0 1.34315 1.34315 0 3 0L15 0C16.6569 0 18 1.34315 18 3L18 15C18 16.6569 16.6569 18 15 18L3 18C1.34315 18 0 16.6569 0 15L0 3Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignBoxModel")}
      {...rest}
    ></Icon>
  );
}
