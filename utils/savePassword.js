const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (password) => {
  /**
   * https://nodejs.org/api/fs.html#fs_file_system_flags
   * fs.open 的第二個參數 flags，預設是 'r'，檔案不存在時會報錯，改為 'a'，檔案不存在時會建立檔案
   */
  fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 666, (err, fd) => {
    console.log(`fd`, fd);
    fs.write(fd, password + os.EOL, null, "utf-8", () => {
      fs.close(fd, () => {
        console.log(chalk.green("Password saved to passwords.txt"));
      });
    });
  });
};

module.exports = savePassword;
