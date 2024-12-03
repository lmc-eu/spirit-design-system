/* eslint-disable no-shadow */
const Fs = require('fs');
// eslint-disable-next-line import/no-unresolved
const D3 = require('d3');
// eslint-disable-next-line import/no-unresolved
const D3Node = require('d3-node');

const styles = `
:root {
  --container: #fffff;
  --unstable-fill: #ffbe00;
  --prerelease-fill: #4dd7be;
  --active-fill: #7652d8;
  --maintenance-fill: #fd7e40;
  --text: #161616;
  --text-on-color: #ffffff;
  --text-inverse: #ffffff;
  --border: #e0e0e0;
}

@media (prefers-color-scheme: light) {
  :root {
    --container: #fffff;
    --unstable-fill: #ffbe00;
    --prerelease-fill: #4dd7be;
    --active-fill: #7652d8;
    --maintenance-fill: #fd7e40;
    --text: #161616;
    --text-on-color: #ffffff;
    --text-inverse: #ffffff;
    --border: #e0e0e0;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --container: #161616;
    --unstable-fill: #ffbe00;
    --prerelease-fill: #4dd7be;
    --active-fill: #7652d8;
    --maintenance-fill: #fd7e40;
    --text: #f4f4f4;
    --text-on-color: #161616;
    --text-inverse: #161616;
    --border: #393939;
  }
}


.container {
  background: var(--container);
}
.prerelease {
  fill: var(--prerelease-fill);
}
.active {
  fill: var(--active-fill);
}
.maintenance {
  fill: var(--maintenance-fill);
}
.unstable {
  fill: var(--unstable-fill);
}
.bar-join {
  fill: var(--border);
}
.bar-join.unstable, .bar-join.prerelease {
  display: none;
}
.tick text {
  font: 16px Inter;
  fill: var(--text);
}
.axis--y .tick text {
  text-anchor: end;
}
.unstable ~ .label {
  fill: var(--text-inverse);
}
.label {
  fill: var(--text-on-color);
  font: 20px Inter;
  text-anchor: start;
  dominant-baseline: middle;
  text-transform: capitalize;
}`;

/**
 * @param {Array} data
 * @param {string} queryStart
 * @param {string} queryEnd
 * @param {string} excludeMaster
 * @param {string} projectName
 *
 * @returns {Array}
 */
function parseInput(data, queryStart, queryEnd, excludeMaster, projectName) {
  const output = [];

  Object.keys(data).forEach((v) => {
    const version = data[v];
    const name = `${projectName} ${v.replace('v', '')}`;
    const prerelease = version.start ? new Date(version.start) : null;
    const active = version.lts ? new Date(version.lts) : null;
    const maint = version.maintenance ? new Date(version.maintenance) : null;
    let end = version.end ? new Date(version.end) : null;

    if (prerelease === null) {
      throw new Error(`missing start in ${version}`);
    }

    if (end === null) {
      throw new Error(`missing end in ${version}`);
    }

    if (maint !== null) {
      if (maint < queryEnd && end > queryStart) {
        output.push({ name, type: 'maintenance', start: maint, end });
      }

      end = maint;
    }

    if (active !== null) {
      if (active < queryEnd && end > queryStart) {
        output.push({ name, type: 'active', start: active, end });
      }

      end = active;
    }

    if (prerelease < queryEnd && end > queryStart) {
      output.push({ name, type: 'prerelease', start: prerelease, end });
    }
  });

  if (!excludeMaster) {
    output.unshift({
      name: 'main',
      type: 'unstable',
      start: queryStart,
      end: queryEnd,
    });
  }

  return output;
}

/**
 * @param {object} options
 *
 * @returns {void}
 */
function create(options) {
  const {
    queryStart,
    queryEnd,
    html,
    svg: svgFile,
    png,
    animate,
    excludeMaster,
    projectName,
    margin: marginInput,
  } = options;
  const data = parseInput(options.data, queryStart, queryEnd, excludeMaster, projectName);
  const d3n = new D3Node({ svgStyles: styles, d3Module: D3 });
  const margin = marginInput || { top: 64, right: 32, bottom: 32, left: 110 };
  const width = 1500 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  const xScale = D3.scaleTime().domain([queryStart, queryEnd]).range([0, width]).clamp(true);
  const yScale = D3.scaleBand()
    .domain(
      // eslint-disable-next-line no-shadow
      data.map((data) => {
        return data.name;
      }),
    )
    .range([0, height])
    .padding(0.3);
  const xAxis = D3.axisBottom(xScale).tickSize(height).tickFormat(D3.timeFormat('%b %Y'));
  const yAxis = D3.axisRight(yScale).tickSize(width);
  const svg = d3n
    .createSVG()
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', `container`)
    .append('g')
    .attr('id', 'bar-container')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  /**
   * @param {Array} data
   *
   * @returns {number}
   */
  function calculateWidth(data) {
    return xScale(data.end) - xScale(data.start);
  }

  /**
   * @param {Array} data
   *
   * @returns {number}
   */
  // eslint-disable-next-line no-unused-vars
  function calculateHeight(data) {
    return yScale.bandwidth();
  }

  /**
   * @param {object} g
   */
  function customXAxis(g) {
    g.call(xAxis);
    g.select('.domain').remove();
    g.selectAll('.tick:nth-child(odd) line').attr('stroke', '#89a19d');
    g.selectAll('.tick:nth-child(even) line').attr('stroke', '#89a19d').attr('stroke-dasharray', '2,2');
    g.selectAll('.tick text').attr('y', 0).attr('dy', -10);
  }

  /**
   *
   * @param {object} g
   */
  function customYAxis(g) {
    g.call(yAxis);
    g.select('.domain').remove();
    g.selectAll('.tick line').attr('stroke', '#e1e7e7');
    g.selectAll('.tick text').attr('x', 0).attr('dx', -10);
    g.append('line').attr('y1', height).attr('y2', height).attr('x2', width).attr('stroke', '#89a19d');
  }

  svg.append('g').attr('class', 'axis axis--x').call(customXAxis);

  svg.append('g').attr('class', 'axis axis--y').call(customYAxis);

  const bar = svg.selectAll('#bar-container').data(data).enter().append('g');

  const rect = bar
    .append('rect')
    .attr('class', (data) => {
      return `bar ${data.type}`;
    })
    .attr('x', (data) => {
      return xScale(data.start);
    })
    .attr('y', (data) => {
      return yScale(data.name);
    })
    .attr('width', calculateWidth)
    .attr('height', calculateHeight);

  if (animate === true) {
    rect.append('animate').attr('attributeName', 'width').attr('from', 0).attr('to', calculateWidth).attr('dur', '1s');
  }

  bar
    .append('rect')
    .attr('class', (data) => {
      return `bar-join ${data.type}`;
    })
    .attr('x', (data) => {
      return xScale(data.start) - 1;
    })
    .attr('y', (data) => {
      return yScale(data.name);
    })
    .attr('width', 2)
    .attr('height', calculateHeight)
    .style('opacity', (data) => {
      // Hack to hide on prerelease and unstable
      if (data.type === 'unstable' || data.type === 'prerelease' || xScale(data.start) <= 0) {
        return 0;
      }

      return 1;
    });

  bar
    .append('text')
    .attr('class', 'label')
    .attr('x', (data) => {
      return xScale(data.start) + 15;
    })
    .attr('y', (data) => {
      // + 2 is a small correction so the text fill is more centered.
      return yScale(data.name) + calculateHeight(data) / 2 + 2;
    })
    .text((data) => {
      return data.type;
    })
    .style('opacity', (data) => {
      // Hack to deal with overflow text.
      const min = data.type.length * 14;

      return +(calculateWidth(data) >= min);
    });

  if (typeof html === 'string') {
    Fs.writeFileSync(html, d3n.html());
  }

  if (typeof svgFile === 'string') {
    Fs.writeFileSync(svgFile, d3n.svgString());
  }

  if (typeof png === 'string') {
    // eslint-disable-next-line global-require, import/no-unresolved -- Load this lazily
    const Svg2png = require('svg2png');

    Fs.writeFileSync(png, Svg2png.sync(Buffer.from(d3n.svgString())));
  }
}

module.exports.create = create;
