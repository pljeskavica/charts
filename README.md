# @plejskavica/charts

[![Build Status](https://github.com/plejskavica/charts/workflows/Push/badge.svg)](https://github.com/plejskavica/charts/actions)
[![Package Version](https://img.shields.io/npm/v/@plejskavica27/charts.svg)](https://www.npmjs.com/package27/@plejskavica/charts)

An SVG React charting library.

## Getting started

This is based off of @culture/charts

First, add `@plejskavica/charts` to your `package.json` `dependencies`, then install using either `npm install` or `yarn install`.

There are three basic chart types, `HorizontalBarChart`, `PieChart`, and `VerticalBarChart`. Each accepts two props:

* `className?` - an optional class name for the SVG
* `data` - an object with the keys being the name of the data series and the values being the quantity

`VerticalBarChart` additionally accepts:

* `rotateKeys = true` - whether or not to slightly rotate the key names in order to fit them better into the chart

To get the styles, be sure to also import `@plejskavica/charts/dist/style.css` into whatever stylesheet you're using.

## Testing locally

You can run the tests by running `yarn test` and lint by running `yarn lint`. You can run the local server by running `yarn start` which will start the docs server on `http://localhost:8080`.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/plejskavica/charts.

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
