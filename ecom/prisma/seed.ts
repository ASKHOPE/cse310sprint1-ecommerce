import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Hash passwords
  const adminPassword = await bcryptjs.hash("admin123", 10);
  const coAdminPassword = await bcryptjs.hash("coadmin123", 10);
  const sellerPassword = await bcryptjs.hash("seller123", 10);
  const customerPassword = await bcryptjs.hash("customer123", 10);

  // Create users
  await prisma.user.createMany({
    data: [
      {
        name: "Admin User",
        email: "admin@example.com",
        password: adminPassword,
        role: "ADMIN",
      },
      {
        name: "Co-Admin User",
        email: "coadmin@example.com",
        password: coAdminPassword,
        role: "CO_ADMIN",
      },
      {
        name: "Seller User",
        email: "seller@example.com",
        password: sellerPassword,
        role: "SELLER",
      },
      {
        name: "Customer User",
        email: "customer@example.com",
        password: customerPassword,
        role: "CUSTOMER",
      },
    ],
  });

  console.log("Users seeded successfully.");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
