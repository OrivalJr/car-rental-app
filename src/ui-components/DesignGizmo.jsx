/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function DesignGizmo(props) {
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
          d: "M8 2C8 0.89543 8.89543 0 10 0C11.1046 0 12 0.89543 12 2C12 2.74028 11.5978 3.38663 11 3.73244L11 10.974L17.1388 15.1944C17.3996 15.0698 17.6917 15 18 15C19.1046 15 20 15.8954 20 17C20 18.1046 19.1046 19 18 19C16.8954 19 16 18.1046 16 17C16 16.9471 16.0021 16.8946 16.0061 16.8427L10 12.7135L3.99391 16.8427C3.99794 16.8946 4 16.9471 4 17C4 18.1046 3.10457 19 2 19C0.89543 19 0 18.1046 0 17C0 15.8954 0.89543 15 2 15C2.30834 15 2.60038 15.0698 2.8612 15.1944L9 10.974L9 3.73244C8.4022 3.38663 8 2.74028 8 2Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "DesignGizmo")}
      {...rest}
    ></Icon>
  );
}
