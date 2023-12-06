-- CreateTable
CREATE TABLE "Products" (
    "UUID" VARCHAR(36) NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_uuid" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "Users" (
    "UUID" VARCHAR(36) NOT NULL,
    "pseudo" VARCHAR(20) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "password" VARCHAR(72) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_uuid" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "Orders" (
    "number" SERIAL NOT NULL,
    "total_cost_ht" VARCHAR(36) NOT NULL,
    "total_quantity" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliver_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUUID" VARCHAR(36) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "belong" (
    "order_number" INTEGER NOT NULL,
    "product_UUID" TEXT NOT NULL,

    CONSTRAINT "belong_pkey" PRIMARY KEY ("order_number","product_UUID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_UUID_key" ON "Products"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Users_UUID_key" ON "Users"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_number_key" ON "Orders"("number");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "order_user" FOREIGN KEY ("userUUID") REFERENCES "Users"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "belong" ADD CONSTRAINT "belong_order_number_fkey" FOREIGN KEY ("order_number") REFERENCES "Orders"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "belong" ADD CONSTRAINT "belong_product_UUID_fkey" FOREIGN KEY ("product_UUID") REFERENCES "Products"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;
