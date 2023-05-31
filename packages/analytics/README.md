# @lmc-eu/spirit-analytics

> Analytic tools for Spirit Design System.

Spirit-analytics is a simple CLI tool, which parses a repository with [react-scanner][react-scanner].
The output is a JSON file or files with collected data.

## Install

```shell
# NPM
npm install --save-dev @lmc-eu/spirit-analytics

# Yarn
yarn add -D @lmc-eu/spirit-analytics
```

## Usage

Running the command without arguments will use working directory as a root and parse entire directory structure from this point

```shell
spirit-analytics
```

You can parse only specific directories from the project with `--source` argument:

```shell
spirit-analytics --source ./frontend
```

By default the output will be saved into `.scanner` directory, but you can specify the path with `--output` argument:

```shell
spirit-analytics --output path/to/folder
```

The [react-scanner] requires a [config file][react-scanner-config] to make it work, spirit-analytics has a default config inside, but if you will need, you can use your own config:

```shell
spirit-analytics --config path/to/config
```

You can run `spirit-analytics --help` to get a list of available options and examples.

[react-scanner]: https://github.com/moroshko/react-scanner
[react-scanner-config]: https://github.com/moroshko/react-scanner#config-file
