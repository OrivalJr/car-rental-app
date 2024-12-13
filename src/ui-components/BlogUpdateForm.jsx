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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Blog, Post } from "../models";
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
export default function BlogUpdateForm(props) {
  const {
    id: idProp,
    blog: blogModelProp,
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
    name: "",
    posts: [],
    cnpj: "",
    ender: "",
    bairro: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [posts, setPosts] = React.useState(initialValues.posts);
  const [cnpj, setCnpj] = React.useState(initialValues.cnpj);
  const [ender, setEnder] = React.useState(initialValues.ender);
  const [bairro, setBairro] = React.useState(initialValues.bairro);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = blogRecord
      ? { ...initialValues, ...blogRecord, posts: linkedPosts }
      : initialValues;
    setName(cleanValues.name);
    setPosts(cleanValues.posts ?? []);
    setCurrentPostsValue(undefined);
    setCurrentPostsDisplayValue("");
    setCnpj(cleanValues.cnpj);
    setEnder(cleanValues.ender);
    setBairro(cleanValues.bairro);
    setErrors({});
  };
  const [blogRecord, setBlogRecord] = React.useState(blogModelProp);
  const [linkedPosts, setLinkedPosts] = React.useState([]);
  const canUnlinkPosts = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Blog, idProp)
        : blogModelProp;
      setBlogRecord(record);
      const linkedPosts = record ? await record.posts.toArray() : [];
      setLinkedPosts(linkedPosts);
    };
    queryData();
  }, [idProp, blogModelProp]);
  React.useEffect(resetStateValues, [blogRecord, linkedPosts]);
  const [currentPostsDisplayValue, setCurrentPostsDisplayValue] =
    React.useState("");
  const [currentPostsValue, setCurrentPostsValue] = React.useState(undefined);
  const postsRef = React.createRef();
  const getIDValue = {
    posts: (r) => JSON.stringify({ id: r?.id }),
  };
  const postsIdSet = new Set(
    Array.isArray(posts)
      ? posts.map((r) => getIDValue.posts?.(r))
      : getIDValue.posts?.(posts)
  );
  const postRecords = useDataStoreBinding({
    type: "collection",
    model: Post,
  }).items;
  const getDisplayValue = {
    posts: (r) => `${r?.play ? r?.play + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    posts: [],
    cnpj: [],
    ender: [],
    bairro: [],
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
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          posts,
          cnpj,
          ender,
          bairro,
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
          const promises = [];
          const postsToLink = [];
          const postsToUnLink = [];
          const postsSet = new Set();
          const linkedPostsSet = new Set();
          posts.forEach((r) => postsSet.add(getIDValue.posts?.(r)));
          linkedPosts.forEach((r) => linkedPostsSet.add(getIDValue.posts?.(r)));
          linkedPosts.forEach((r) => {
            if (!postsSet.has(getIDValue.posts?.(r))) {
              postsToUnLink.push(r);
            }
          });
          posts.forEach((r) => {
            if (!linkedPostsSet.has(getIDValue.posts?.(r))) {
              postsToLink.push(r);
            }
          });
          postsToUnLink.forEach((original) => {
            if (!canUnlinkPosts) {
              throw Error(
                `Post ${original.id} cannot be unlinked from Blog because blogPostsId is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Post.copyOf(original, (updated) => {
                  updated.blogPostsId = null;
                  updated.blog = null;
                })
              )
            );
          });
          postsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Post.copyOf(original, (updated) => {
                  updated.blogPostsId = blogRecord.id;
                  updated.blog = blogRecord;
                })
              )
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            cnpj: modelFields.cnpj,
            ender: modelFields.ender,
            bairro: modelFields.bairro,
          };
          promises.push(
            DataStore.save(
              Blog.copyOf(blogRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BlogUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              posts,
              cnpj,
              ender,
              bairro,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              posts: values,
              cnpj,
              ender,
              bairro,
            };
            const result = onChange(modelFields);
            values = result?.posts ?? values;
          }
          setPosts(values);
          setCurrentPostsValue(undefined);
          setCurrentPostsDisplayValue("");
        }}
        currentFieldValue={currentPostsValue}
        label={"Estrutura"}
        items={posts}
        hasError={errors?.posts?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("posts", currentPostsValue)
        }
        errorMessage={errors?.posts?.errorMessage}
        getBadgeText={getDisplayValue.posts}
        setFieldValue={(model) => {
          setCurrentPostsDisplayValue(
            model ? getDisplayValue.posts(model) : ""
          );
          setCurrentPostsValue(model);
        }}
        inputFieldRef={postsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Estrutura"
          isRequired={false}
          isReadOnly={false}
          placeholder="Escolha a estrutura"
          value={currentPostsDisplayValue}
          options={postRecords
            .filter((r) => !postsIdSet.has(getIDValue.posts?.(r)))
            .map((r) => ({
              id: getIDValue.posts?.(r),
              label: getDisplayValue.posts?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPostsValue(
              postRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPostsDisplayValue(label);
            runValidationTasks("posts", label);
          }}
          onClear={() => {
            setCurrentPostsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.posts?.hasError) {
              runValidationTasks("posts", value);
            }
            setCurrentPostsDisplayValue(value);
            setCurrentPostsValue(undefined);
          }}
          onBlur={() => runValidationTasks("posts", currentPostsDisplayValue)}
          errorMessage={errors.posts?.errorMessage}
          hasError={errors.posts?.hasError}
          ref={postsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "posts")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Cnpj"
        isRequired={false}
        isReadOnly={false}
        value={cnpj}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              posts,
              cnpj: value,
              ender,
              bairro,
            };
            const result = onChange(modelFields);
            value = result?.cnpj ?? value;
          }
          if (errors.cnpj?.hasError) {
            runValidationTasks("cnpj", value);
          }
          setCnpj(value);
        }}
        onBlur={() => runValidationTasks("cnpj", cnpj)}
        errorMessage={errors.cnpj?.errorMessage}
        hasError={errors.cnpj?.hasError}
        {...getOverrideProps(overrides, "cnpj")}
      ></TextField>
      <TextField
        label="Ender"
        isRequired={false}
        isReadOnly={false}
        value={ender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              posts,
              cnpj,
              ender: value,
              bairro,
            };
            const result = onChange(modelFields);
            value = result?.ender ?? value;
          }
          if (errors.ender?.hasError) {
            runValidationTasks("ender", value);
          }
          setEnder(value);
        }}
        onBlur={() => runValidationTasks("ender", ender)}
        errorMessage={errors.ender?.errorMessage}
        hasError={errors.ender?.hasError}
        {...getOverrideProps(overrides, "ender")}
      ></TextField>
      <TextField
        label="Bairro"
        isRequired={false}
        isReadOnly={false}
        value={bairro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              posts,
              cnpj,
              ender,
              bairro: value,
            };
            const result = onChange(modelFields);
            value = result?.bairro ?? value;
          }
          if (errors.bairro?.hasError) {
            runValidationTasks("bairro", value);
          }
          setBairro(value);
        }}
        onBlur={() => runValidationTasks("bairro", bairro)}
        errorMessage={errors.bairro?.errorMessage}
        hasError={errors.bairro?.hasError}
        {...getOverrideProps(overrides, "bairro")}
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
          isDisabled={!(idProp || blogModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
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
            isDisabled={
              !(idProp || blogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
