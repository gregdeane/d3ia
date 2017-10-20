import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

import './App.css';

class BarChart extends Component {
  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart = () => {
    const { data, size } = this.props;
    const node = this.node;
    const dataMax = max(data);
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, size[1]]);

    select(node)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect');

    select(node)
      .selectAll('rect')
      .data(data)
      .exit()
      .remove();

    select(node)
      .selectAll('rect')
      .data(data)
      .style('fill', '#fe9922')
      .attr('x', (d, i) => i * 25)
      .attr('y', d => size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25);
  };

  render() {
    return (
      <svg ref={node => this.node = node} width={500} height={500}></svg>
    );
  }
}

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.array.isRequired
};

export default BarChart;
