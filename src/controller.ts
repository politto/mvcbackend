import { Elysia } from "elysia";
import { addCowServ, checkIfGoatServ, getAllCowsServ, getCowServ, getMilk } from "./service";
import { ApiCallDto } from "../dto/ApiCallDto";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
.get("/", () => {
  
})
.use(cors())
.get("/cows", async () => {
  return await getAllCowsServ();
})
.get("/cow/:id", async ({ params }: any) => {
  const { id } = params;
  return await getCowServ(id);
})
.post("/addCow", async (body: ApiCallDto) => {
  return await addCowServ(body.body);
})
.get("/isGoat/:id", async ({ params }: any) => {
  const { id } = params;
  return await checkIfGoatServ(id);
})
.put("/milk/:id", async ({ params }: any) => {
  const { id } = params;
  // console.log("controller passed")
  return await getMilk(id);
})
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

