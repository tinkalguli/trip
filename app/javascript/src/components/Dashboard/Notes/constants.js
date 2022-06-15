import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  tags: null,
  assigned_contacts: null,
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  tags: yup
    .array()
    .nullable()
    .of(
      yup.object().shape({
        value: yup.string().required("Minimum one tag should be selected"),
        label: yup.string().required("Minimum one tag should be selected"),
      })
    )
    .required("Minimum one tag should be selected"),
  assigned_contacts: yup
    .array()
    .nullable()
    .of(
      yup.object().shape({
        value: yup.string().required("Minimum one contact should be assigned"),
        label: yup.string().required("Minimum one contact should be assigned"),
      })
    )
    .required("Minimum one contact should be assigned"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const TAGS = [
  { label: "Getting Started", value: "getting-started" },
  { label: "Onboarding", value: "onboarding" },
  { label: "User Flow", value: "user-flow" },
  { label: "UX", value: "ux" },
  { label: "Bugs", value: "bugs" },
  { label: "V2", value: "v2" },
];

export const NOTES_VIEWS = [
  { label: "All", count: 200 },
  { label: "Users", count: 80 },
  { label: "Leads", count: 60 },
  { label: "Visitors", count: 60 },
];

export const NOTES_SEGMENTS = [
  { label: "Europe", count: 80 },
  { label: "Middle-East", count: 60 },
  { label: "Asia", count: 60 },
];

export const NOTES_TAGS = [
  { label: "Sales", count: 80 },
  { label: "Finance", count: 60 },
  { label: "User Experience", count: 60 },
];
