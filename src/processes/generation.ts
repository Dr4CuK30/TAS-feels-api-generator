import { spawn } from "child_process";

export default async (projectName: string) => {
  console.log("|| PROJECT GENERATION|| ");
  await generateProject(projectName);
};

const generateProject = (projectName: string) => {
  const command = "nest";
  const args = ["new", `output/${projectName}`];
  const process = spawn(command, args, { stdio: "pipe" });
  process.stdin.write("1\n");
  process.stdout.on("data", (data) => {
    console.log(`${data}`);
  });
  process.stderr.on("data", (data) => {
    console.error(`${data}`);
  });
  return new Promise(async (resolve, reject) => {
    try {
      process.on("close", async (code) => {
        if (code === 0) {
          await generateFeedsService(projectName);
          resolve(code);
        } else {
          reject(`El proceso falló con código de salida ${code}`);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

const generateFeedsService = (projectName: string) => {
  const command = "nest";
  const args = ["g", "resource", `modules/feeds`];
  const process = spawn(command, args, {
    stdio: "pipe",
    cwd: `./output/${projectName}`,
  });
  process.stdin.write("1\n");
  process.stdin.write("Y\n");
  process.stdout.on("data", (data) => {
    console.log(`${data}`);
  });
  return new Promise(async (resolve, reject) => {
    try {
      process.on("close", async (code) => {
        if (code === 0) {
          resolve(code);
        } else {
          reject(`El proceso falló con código de salida ${code}`);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
