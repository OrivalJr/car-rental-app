/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DatabaseRowInsertTop(props) {
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
          d: "M9 0C9.55229 0 10 0.447715 10 1L10 2L11 2C11.5523 2 12 2.44772 12 3C12 3.55228 11.5523 4 11 4L10 4L10 5C10 5.55228 9.55229 6 9 6C8.44772 6 8 5.55228 8 5L8 4L7 4C6.44772 4 6 3.55228 6 3C6 2.44772 6.44772 2 7 2L8 2L8 1C8 0.447715 8.44772 0 9 0ZM0.585787 8.58579C0.960859 8.21071 1.46957 8 2 8L16 8C16.5304 8 17.0391 8.21071 17.4142 8.58579C17.7893 8.96086 18 9.46957 18 10L18 14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16L2 16C1.46957 16 0.960861 15.7893 0.585787 15.4142C0.210714 15.0391 0 14.5304 0 14L0 10C0 9.46957 0.210714 8.96086 0.585787 8.58579ZM2 10L2 14L16 14L16 10L2 10Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DatabaseRowInsertTop")}
      {...rest}
    ></Icon>
  );
}
