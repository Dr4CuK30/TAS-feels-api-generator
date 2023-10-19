import { FeedsModel } from "./model/feeds.model";
import fs from "fs";
import generateProject from "./processes/generation";
const path = "model.json";

const data: FeedsModel = JSON.parse(fs.readFileSync(path, "utf8"));
generateProject(data.projectName);
