import { FeedsModel } from "./metamodel/feeds.metamodel";
import fs from "fs";
import generateProject from "./processes/generation";
import installDependences from "./processes/installDependences";
import configurateProject from "./processes/configurateProject";

main();

function main() {
  startGeneration();
}

async function startGeneration() {
  const path = "model.json";
  const data: FeedsModel = JSON.parse(fs.readFileSync(path, "utf8"));
  await generateProject(data.projectName);
  await installDependences(data.projectName, data.connection.dbType);
  await configurateProject(data);
}
