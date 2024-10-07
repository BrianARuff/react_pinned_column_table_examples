import { faker } from "@faker-js/faker";

export const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "zip",
    header: "Zip",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "hireDate",
    header: "Hire Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

// Generate 10 rows of data
export const data = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.number("(###) ###-####"),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  zip: faker.address.zipCode(),
  country: faker.address.country(),
  company: faker.company.name(),
  position: faker.name.jobTitle(),
  department: faker.commerce.department(),
  hireDate: faker.date.past().toLocaleDateString(),
  status: faker.helpers.arrayElement(["Active", "Inactive", "On Leave"]),
}));
