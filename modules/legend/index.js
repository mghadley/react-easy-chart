import React from 'react';
import { Style } from 'radium';
import { scale } from 'd3';
import {
  getRandomId
} from '../shared';
import merge from 'lodash.merge';

import defaultStyles from './defaultStyles';

const colors = scale.category20().range();

export default class Legend extends React.Component {

  static get propTypes() {
    return {
      config: React.PropTypes.array,
      data: React.PropTypes.array.isRequired,
      tags: React.PropTypes.array,
      dataId: React.PropTypes.string.isRequired,
      horizontal: React.PropTypes.bool,
      styles: React.PropTypes.object
    };
  }

  static get defaultProps() {
    return {
      tags: []
    };
  }

  constructor(props) {
    super(props);

    this.uid = getRandomId(); // Math.floor(Math.random() * new Date().getTime());
  }

  getBackgroundColor(index) {
    const {
      config
    } = this.props;

    if (typeof config !== 'undefined') {
      if (config.length > index) {
        return config[index].color;
      }
    }
    return colors[index];
  }

  createLegend() {
    const {
      dataId,
      data,
      tags,
      horizontal
    } = this.props;

    const className =
      (horizontal)
        ? 'horizontal'
        : false;

    data.forEach((item) => {
      const index = tags.findIndex((tag) => tag === item[dataId]);
      if (index < 0) tags.push(item[dataId]);
    });

    return (
      <ul className="legend">
        {tags.map((item, index) => {
          const key = `legend-item-${index}`;
          const backgroundColor = this.getBackgroundColor(index);
          return (
            <li key={key} className={className}>
              <span
                className="icon"
                style={{ backgroundColor }}
              />
              {item}
            </li>
          );
        })}
      </ul>
    );
  }

  createStyle() {
    const {
      styles
    } = this.props;

    const uid = this.uid;
    const rules = merge({}, defaultStyles, styles);
    const scope = `.legend-container-${uid}`;

    return (
      <Style
        scopeSelector={scope}
        rules={rules}
      />
    );
  }

  render() {
    const uid = this.uid;
    const className = `legend-container-${uid}`;
    return (
      <div className={className}>
        {this.createStyle()}
        {this.createLegend()}
      </div>
    );
  }
}
