/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignCrop(props) {
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
          d: "M4 0C4.55228 0 5 0.447715 5 1L5 3L11 3C11.5304 3 12.0391 3.21071 12.4142 3.58579C12.7893 3.96086 13 4.46957 13 5L13 11L15 11C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13L13 13L13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15L11 13L5 13C4.46957 13 3.96086 12.7893 3.58579 12.4142C3.21071 12.0391 3 11.5304 3 11L3 5L1 5C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3L3 3L3 1C3 0.447715 3.44772 0 4 0ZM5 5L5 11L11 11L11 5L5 5Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignCrop")}
      {...rest}
    ></Icon>
  );
}
