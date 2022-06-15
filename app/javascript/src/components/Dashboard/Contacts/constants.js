import * as yup from "yup";

export const CONTACTS = [
  {
    email: "Barry_Taylor3408@twace.org",
    first_name: "Barry",
    last_name: "Taylor",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Chuck_Dyson5768@atink.com",
    first_name: "Chuck",
    last_name: "Dyson",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Eduardo_Gunn5778@gembat.biz",
    first_name: "Eduardo",
    last_name: "Gunn",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Eduardo_Allcott9101@sveldo.biz",
    first_name: "Eduardo",
    last_name: "Allcott",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Nathan_Khan8258@bungar.biz",
    first_name: "Nathan",
    last_name: "Khan",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Zoe_Terry2465@nanoff.biz",
    first_name: "Zoe",
    last_name: "Terry",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Cecilia_Watt8135@naiker.biz",
    first_name: "Cecilia",
    last_name: "Watt",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Jennifer_Lewis9652@gmail.com",
    first_name: "Jennifer",
    last_name: "Lewis",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Lana_Shields2803@cispeto.com",
    first_name: "Lana",
    last_name: "Shields",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Julian_Cunningham2816@zorer.org",
    first_name: "Julian",
    last_name: "Cunningham",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Diane_Hilton5577@mafthy.com",
    first_name: "Diane",
    last_name: "Hilton",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Mason_Goodman4082@eirey.tech",
    first_name: "Mason",
    last_name: "Goodman",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Candace_Lindsay3978@atink.com",
    first_name: "Candace",
    last_name: "Lindsay",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Harry_Miller7846@extex.org",
    first_name: "Harry",
    last_name: "Miller",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Alexander_Palmer5366@bungar.biz",
    first_name: "Alexander",
    last_name: "Palmer",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Johnathan_Porter3237@iatim.tech",
    first_name: "Johnathan",
    last_name: "Porter",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Alexander_Ring3679@eirey.tech",
    first_name: "Alexander",
    last_name: "Ring",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Analise_Neville2234@deavo.com",
    first_name: "Analise",
    last_name: "Neville",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Carter_Walter7155@nanoff.biz",
    first_name: "Carter",
    last_name: "Walter",
    created_at: "2022-05-31T12:38:32.806Z",
  },
  {
    email: "Eryn_Nanton1351@muall.tech",
    first_name: "Eryn",
    last_name: "Nanton",
    created_at: "2022-05-31T12:38:32.806Z",
  },
];

export const CONTACTS_VIEWS = [
  { label: "All", count: 200 },
  { label: "Archived", count: 80 },
  { label: "Completed", count: 60 },
  { label: "Phase 2", count: 60 },
];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().required("Role is required"),
      value: yup.string().required("Role is required"),
    })
    .required("Role is required"),
});

export const ROLES = [
  { label: "Agent", value: "agent" },
  { label: "Admin", value: "admin" },
  { label: "User", value: "user" },
  { label: "Accountant", value: "accountant" },
];

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  role: null,
};

export const DEFAULT_PAGE_SIZE = 10;

export const INITIAL_PAGE_NUMBER = 1;
