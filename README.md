
# cli/passgen

Password generator

easy to use, after generated will auto copy to clipboard 

## Installation

    npm install passgen -g

### Notice

Well, because this project is just a practice, I haven't push package to [npm](https://www.npmjs.com/).

if you want to use passgen, just follow step

    # download project
    git clone https://github.com/Mix-Liten/passgen.git

    # global install
    npm i -g ./passgen

## Usage

### From the CLI

    passgen -h

Displays this help

    Simple Password Generator

    Options:
    -V, --version       output the version number
    -h, --help          display help for command

    Commands:
    generate [options]
    help [command]      display help for command

And simple use `generate`

    passgen generate 
    => a+y8*ZNP

Custom length

    passgen generate -l 30
    => b5tN9h$N6scdLg*dPcqk0k6_T_G_is

reference `generate`'s options

    -l, --length <number>  length of password (default: "8")
    -s, --save             save password to passwords.txt
    -nn, --no-numbers      remove numbers
    -ns, --no-symbols      remove symbols
    -h, --help             display help for command
## License

[MIT](https://choosealicense.com/licenses/mit/)
