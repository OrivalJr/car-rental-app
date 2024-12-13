/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignLayoutSidebarRightCollapse(props) {
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
          d: "M3 2C2.44772 2 2 2.44772 2 3L2 15C2 15.5523 2.44772 16 3 16L11 16L11 2L3 2ZM3 0C1.34315 0 0 1.34315 0 3L0 15C0 16.6569 1.34315 18 3 18L15 18C16.6569 18 18 16.6569 18 15L18 3C18 1.34315 16.6569 0 15 0L3 0ZM13 2L13 16L15 16C15.5523 16 16 15.5523 16 15L16 3C16 2.44772 15.5523 2 15 2L13 2ZM5.29289 6.29289C5.68342 5.90237 6.31658 5.90237 6.70711 6.29289L8.70711 8.29289C9.09763 8.68342 9.09763 9.31658 8.70711 9.70711L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071C4.90237 11.3166 4.90237 10.6834 5.29289 10.2929L6.58579 9L5.29289 7.70711C4.90237 7.31658 4.90237 6.68342 5.29289 6.29289Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignLayoutSidebarRightCollapse")}
      {...rest}
    ></Icon>
  );
}
