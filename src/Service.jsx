export const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    street: "123 Main St",
    city: "New York",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    street: "456 Oak Ave",
    city: "Los Angeles",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    street: "789 Pine Rd",
    city: "Chicago",
  },
];

export const newUsers = [
  {
    name: "Alice Brown",
    email: "alice.brown@example.com",
    street: "101 Elm St",
    city: "Houston",
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    street: "202 Maple Dr",
    city: "Phoenix",
  },
];

const street = "202 Maple Dr";
const city = "Phoenix";

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};
