/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function CurrenciesRipple(props) {
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
          d: "M14 2C12.8954 2 12 2.89543 12 4C12 5.10457 12.8954 6 14 6C15.1046 6 16 5.10457 16 4C16 2.89543 15.1046 2 14 2ZM10 4C10 1.79086 11.7909 0 14 0C16.2091 0 18 1.79086 18 4C18 6.20914 16.2091 8 14 8C13.4159 8 12.861 7.8748 12.3608 7.64978L11.2806 9L12.3608 10.3502C12.861 10.1252 13.4159 10 14 10C16.2091 10 18 11.7909 18 14C18 16.2091 16.2091 18 14 18C11.7909 18 10 16.2091 10 14C10 13.0996 10.2975 12.2687 10.7995 11.6002L9.51938 10L7.87398 10C7.42994 11.7252 5.86384 13 4 13C1.79086 13 0 11.2091 0 9C0 6.79086 1.79086 5 4 5C5.86384 5 7.42994 6.27477 7.87398 8L9.51938 8L10.7995 6.39979C10.2975 5.73129 10 4.90039 10 4ZM4 7C2.89543 7 2 7.89543 2 9C2 10.1046 2.89543 11 4 11C5.10457 11 6 10.1046 6 9C6 7.89543 5.10457 7 4 7ZM14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12Z",
          fill: "rgba(33,37,41,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "CurrenciesRipple")}
      {...rest}
    ></Icon>
  );
}
