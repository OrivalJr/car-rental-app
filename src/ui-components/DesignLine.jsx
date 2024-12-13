/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignLine(props) {
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
          d: "M15 2C14.4477 2 14 2.44772 14 3C14 3.55228 14.4477 4 15 4C15.5523 4 16 3.55228 16 3C16 2.44772 15.5523 2 15 2ZM12 3C12 1.34315 13.3431 0 15 0C16.6569 0 18 1.34315 18 3C18 4.65685 16.6569 6 15 6C14.5369 6 14.0982 5.89505 13.7066 5.70763L5.70763 13.7066C5.89505 14.0982 6 14.5369 6 15C6 16.6569 4.65685 18 3 18C1.34315 18 0 16.6569 0 15C0 13.3431 1.34315 12 3 12C3.46315 12 3.90178 12.105 4.29342 12.2924L12.2924 4.29342C12.105 3.90178 12 3.46315 12 3ZM3 14C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16C3.55228 16 4 15.5523 4 15C4 14.4477 3.55228 14 3 14Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignLine")}
      {...rest}
    ></Icon>
  );
}
