const os = require("os");
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");

const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");

program
  .version("1.0.0")
  .description("Simple Password Generator")
  .name("passgen")
  .usage("<command> [options]");

program
  .command("generate")
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .action((opts) => {
    const { length, save, numbers, symbols } = opts;

    if (length !== undefined && isNaN(length)) {
      console.log(
        chalk.red(
          `error occurred in ${chalk.yellow(
            "length"
          )} option, it should be number type, but received: ${chalk.yellow(
            length
          )}`
        )
      );
      process.exit();
    }

    // Get generated password
    const generatedPassword = createPassword(length, numbers, symbols);

    // Copy to clipboard
    clipboardy.writeSync(generatedPassword);

    // Save to file
    if (save) {
      savePassword(generatedPassword);
    }

    // Output generated password
    console.log(
      `${chalk.blue("Generated Password:")} ${chalk.bold(generatedPassword)}`
    );
    console.log(`${chalk.yellow("Password copied to clipboard")}`);
  });

program.on("command:*", ([cmd]) => {
  program.outputHelp();
  console.log(os.EOL + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`));
  process.exit();
});

program.parse(process.argv);
