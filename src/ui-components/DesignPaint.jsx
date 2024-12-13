/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignPaint(props) {
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
          d: "M3 2C2.44772 2 2 2.44772 2 3L2 5C2 5.55228 2.44772 6 3 6L13 6C13.5523 6 14 5.55228 14 5L14 3C14 2.44772 13.5523 2 13 2L3 2ZM16 5C16 6.65685 14.6569 8 13 8L3 8C1.34315 8 0 6.65685 0 5L0 3C0 1.34315 1.34315 0 3 0L13 0C14.6569 0 16 1.34315 16 3C16.7957 3 17.5587 3.31607 18.1213 3.87868C18.6839 4.44129 19 5.20435 19 6C19 7.5913 18.3679 9.11742 17.2426 10.2426C16.1174 11.3679 14.5913 12 13 12L9 12C10.1046 12 11 12.8954 11 14L11 18C11 19.1046 10.1046 20 9 20L7 20C5.89543 20 5 19.1046 5 18L5 14C5 12.8954 5.89543 12 7 12L7 11C7 10.4477 7.44772 10 8 10L13 10C14.0609 10 15.0783 9.57857 15.8284 8.82843C16.5786 8.07828 17 7.06087 17 6C17 5.73478 16.8946 5.48043 16.7071 5.29289C16.5196 5.10536 16.2652 5 16 5ZM7 14L7 18L9 18L9 14L7 14Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(16.67%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignPaint")}
      {...rest}
    ></Icon>
  );
}
