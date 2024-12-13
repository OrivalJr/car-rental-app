/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Post, Blog } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { DataStore } from "aws-amplify/datastore";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PostCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    play: false,
    blog: undefined,
    playgr: "",
    terraco: false,
    descterraco: "",
  };
  const [play, setPlay] = React.useState(initialValues.play);
  const [blog, setBlog] = React.useState(initialValues.blog);
  const [playgr, setPlaygr] = React.useState(initialValues.playgr);
  const [terraco, setTerraco] = React.useState(initialValues.terraco);
  const [descterraco, setDescterraco] = React.useState(
    initialValues.descterraco
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPlay(initialValues.play);
    setBlog(initialValues.blog);
    setCurrentBlogValue(undefined);
    setCurrentBlogDisplayValue("");
    setPlaygr(initialValues.playgr);
    setTerraco(initialValues.terraco);
    setDescterraco(initialValues.descterraco);
    setErrors({});
  };
  const [currentBlogDisplayValue, setCurrentBlogDisplayValue] =
    React.useState("");
  const [currentBlogValue, setCurrentBlogValue] = React.useState(undefined);
  const blogRef = React.createRef();
  const getIDValue = {
    blog: (r) => JSON.stringify({ id: r?.id }),
  };
  const blogIdSet = new Set(
    Array.isArray(blog)
      ? blog.map((r) => getIDValue.blog?.(r))
      : getIDValue.blog?.(blog)
  );
  const blogRecords = useDataStoreBinding({
    type: "collection",
    model: Blog,
  }).items;
  const getDisplayValue = {
    blog: (r) => `${r?.name}`,
  };
  const validations = {
    play: [],
    blog: [],
    playgr: [],
    terraco: [],
    descterraco: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="10px"
      columnGap="200px"
      padding="100px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          play,
          blog,
          playgr,
          terraco,
          descterraco,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Post(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PostCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Play"
        defaultChecked={false}
        isDisabled={false}
        isChecked={play}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              play: value,
              blog,
              playgr,
              terraco,
              descterraco,
            };
            const result = onChange(modelFields);
            value = result?.play ?? value;
          }
          if (errors.play?.hasError) {
            runValidationTasks("play", value);
          }
          setPlay(value);
        }}
        onBlur={() => runValidationTasks("play", play)}
        errorMessage={errors.play?.errorMessage}
        hasError={errors.play?.hasError}
        {...getOverrideProps(overrides, "play")}
      ></SwitchField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              play,
              blog: value,
              playgr,
              terraco,
              descterraco,
            };
            const result = onChange(modelFields);
            value = result?.blog ?? value;
          }
          setBlog(value);
          setCurrentBlogValue(undefined);
          setCurrentBlogDisplayValue("");
        }}
        currentFieldValue={currentBlogValue}
        label={"Condom\u00EDnio"}
        items={blog ? [blog] : []}
        hasError={errors?.blog?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("blog", currentBlogValue)
        }
        errorMessage={errors?.blog?.errorMessage}
        getBadgeText={getDisplayValue.blog}
        setFieldValue={(model) => {
          setCurrentBlogDisplayValue(model ? getDisplayValue.blog(model) : "");
          setCurrentBlogValue(model);
        }}
        inputFieldRef={blogRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Condomínio"
          isRequired={false}
          isReadOnly={false}
          placeholder="Escolha um condomínio"
          value={currentBlogDisplayValue}
          options={blogRecords
            .filter((r) => !blogIdSet.has(getIDValue.blog?.(r)))
            .map((r) => ({
              id: getIDValue.blog?.(r),
              label: getDisplayValue.blog?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBlogValue(
              blogRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBlogDisplayValue(label);
            runValidationTasks("blog", label);
          }}
          onClear={() => {
            setCurrentBlogDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.blog?.hasError) {
              runValidationTasks("blog", value);
            }
            setCurrentBlogDisplayValue(value);
            setCurrentBlogValue(undefined);
          }}
          onBlur={() => runValidationTasks("blog", currentBlogDisplayValue)}
          errorMessage={errors.blog?.errorMessage}
          hasError={errors.blog?.hasError}
          ref={blogRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "blog")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Playground"
        isRequired={false}
        isReadOnly={false}
        value={playgr}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              play,
              blog,
              playgr: value,
              terraco,
              descterraco,
            };
            const result = onChange(modelFields);
            value = result?.playgr ?? value;
          }
          if (errors.playgr?.hasError) {
            runValidationTasks("playgr", value);
          }
          setPlaygr(value);
        }}
        onBlur={() => runValidationTasks("playgr", playgr)}
        errorMessage={errors.playgr?.errorMessage}
        hasError={errors.playgr?.hasError}
        {...getOverrideProps(overrides, "playgr")}
      ></TextField>
      <SwitchField
        label="Terraço"
        defaultChecked={false}
        isDisabled={false}
        isChecked={terraco}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              play,
              blog,
              playgr,
              terraco: value,
              descterraco,
            };
            const result = onChange(modelFields);
            value = result?.terraco ?? value;
          }
          if (errors.terraco?.hasError) {
            runValidationTasks("terraco", value);
          }
          setTerraco(value);
        }}
        onBlur={() => runValidationTasks("terraco", terraco)}
        errorMessage={errors.terraco?.errorMessage}
        hasError={errors.terraco?.hasError}
        {...getOverrideProps(overrides, "terraco")}
      ></SwitchField>
      <TextField
        label="Descrição do terraço"
        isRequired={false}
        isReadOnly={false}
        value={descterraco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              play,
              blog,
              playgr,
              terraco,
              descterraco: value,
            };
            const result = onChange(modelFields);
            value = result?.descterraco ?? value;
          }
          if (errors.descterraco?.hasError) {
            runValidationTasks("descterraco", value);
          }
          setDescterraco(value);
        }}
        onBlur={() => runValidationTasks("descterraco", descterraco)}
        errorMessage={errors.descterraco?.errorMessage}
        hasError={errors.descterraco?.hasError}
        {...getOverrideProps(overrides, "descterraco")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Limpar"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="200px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancelar"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Enviar"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
