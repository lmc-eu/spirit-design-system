# `lts-schedule`

A command line utility that generates the Spirit LTS schedule as a graph.
Accepts JSON LTS data and a date range as inputs.
Writes the LTS graph as HTML, SVG, and PNG files.

## 👨‍💻 Usage

```bash
node bin/lts.js -s 2021-07-01 -e 2027-06-01 -h output.html -g output.svg -p output.png
```

### Options

- `-d`, `--data` - The path of the input JSON file. The JSON file should be the same format as the [one in Node's LTS repo][node-lts-repo]. If this option is not provided, `lts` uses its own bundled JSON file.
- `-s`, `--start` - The start date of the graph. Internally, this option is passed to `new Date()`. Optional. Defaults to the current date.
- `-e`, `--end` - The end date of the graph. Internally, this option is passed to `new Date()`. Optional. Defaults to one year from the current date.
- `-h`, `--html` - The location to write the HTML output file. Optional.
- `-g`, `--svg` - The location to write the SVG output file. Optional.
- `-p`, `--png` - The location to write the PNG output file. Uses `svg2png` under the hood. Optional.
- `-a`, `--animate` - Animate the bars of the graph on load.
- `-m`, `--excludeMaster` - Exclude the `Master (unstable)` bar that is ever-present at the top of the graph. Optional. Defaults to false.
- `-n`, `--projectName` - Provide a project name for the graph which will be displayed on the left axis beside each version. Optional. Defaults to `Node.js`.

## 🙌 Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our [Contributing Guide][contributing]! 👀

## 📝 License

Licensed under the [MIT][license].

[contributing]: https://github.com/lmc-eu/spirit-design-system/blob/main/CONTRIBUTING.md
[node-lts-repo]: https://github.com/nodejs/LTS/blob/master/schedule.json
[license]: https://github.com/lmc-eu/spirit-design-system/blob/main/LICENSE.md
