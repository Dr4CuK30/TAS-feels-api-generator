import { spawn } from "child_process";

export default (projectName: string) => {
  const command2 = "nest";
  const args2 = ["new", `output/${projectName}`];

  // Crea un proceso hijo

  const process2 = spawn(command2, args2, { stdio: "pipe" });

  const entrada = "1\n";

  process2.stdin.write(entrada);
  process2.stdin.write(`cd output/${projectName}`);
  process2.stdin.write(`ls`);

  process2.stdout.on("data", (data) => {
    console.log(`${data}`);
  });

  process2.stderr.on("data", (data) => {
    console.error(`${data}`);
  });

  process2.on("close", (code) => {
    console.log(
      `Proceso de instalación finalizado con código de salida ${code}`
    );
  });
};
