/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  EuiDescriptionList,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiTitle,
  EuiSpacer,
  EuiIconTip,
} from '@elastic/eui';

import { JobStatus } from '../../job_status';

export class TabSummary extends Component {
  static propTypes = {
    job: PropTypes.object.isRequired,
    stats: PropTypes.object,
  };

  renderStats() {
    const { stats } = this.props;

    if (!stats) {
      return null;
    }

    const {
      documentsProcessed,
      pagesProcessed,
      rollupsIndexed,
      triggerCount,
      status,
    } = stats;

    return (
      <Fragment>
        <EuiSpacer size="s" />

        <EuiTitle size="s">
          <h3>Stats</h3>
        </EuiTitle>

        <EuiSpacer size="s" />

        <EuiDescriptionList type="column" align="center">
          <Fragment>
            <EuiDescriptionListTitle>
              <strong>Status</strong>
            </EuiDescriptionListTitle>

            <EuiDescriptionListDescription>
              <JobStatus status={status} />
            </EuiDescriptionListDescription>
          </Fragment>

          <EuiDescriptionListTitle>
            <strong>Documents processed</strong>
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription>
            {documentsProcessed}
          </EuiDescriptionListDescription>

          <EuiDescriptionListTitle>
            <strong>Pages processed</strong>
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription>
            {pagesProcessed}
          </EuiDescriptionListDescription>

          <EuiDescriptionListTitle>
            <strong>Rollups indexed</strong>
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription>
            {rollupsIndexed}
          </EuiDescriptionListDescription>

          <EuiDescriptionListTitle>
            <strong>Trigger count</strong>
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription>
            {triggerCount}
          </EuiDescriptionListDescription>
        </EuiDescriptionList>
      </Fragment>
    );
  }

  render() {
    const { job } = this.props;

    const {
      indexPattern,
      rollupIndex,
      rollupCron,
      dateHistogramInterval,
      dateHistogramDelay,
      dateHistogramTimeZone,
      dateHistogramField,
    } = job;

    return (
      <Fragment>
        <EuiTitle size="s">
          <h3>Logistics</h3>
        </EuiTitle>

        <EuiSpacer size="s" />

        <EuiDescriptionList type="column" align="center">
          <EuiDescriptionListTitle>
            <strong>Index pattern</strong>
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription className="eui-textBreakWord">
            {indexPattern}
          </EuiDescriptionListDescription>

          <EuiDescriptionListTitle>
            <strong>Rollup index</strong>
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription className="eui-textBreakWord">
            {rollupIndex}
          </EuiDescriptionListDescription>

          <EuiDescriptionListTitle>
            <strong>Cron</strong>{' '}
            <EuiIconTip
              content="Interval at which data is rolled up"
            />
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription>
            {rollupCron}
          </EuiDescriptionListDescription>
        </EuiDescriptionList>

        <EuiSpacer size="s" />

        <EuiTitle size="s">
          <h3>Date histogram</h3>
        </EuiTitle>

        <EuiSpacer size="s" />

        <EuiDescriptionList type="column" align="center">
          <EuiDescriptionListTitle>
            <strong>Time field</strong>
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription className="eui-textBreakWord">
            {dateHistogramField}
          </EuiDescriptionListDescription>

          <EuiDescriptionListTitle>
            <strong>Timezone</strong>
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription>
            {dateHistogramTimeZone}
          </EuiDescriptionListDescription>

          <EuiDescriptionListTitle>
            <strong>Delay</strong>
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription>
            {dateHistogramDelay || 'None'}
          </EuiDescriptionListDescription>

          <EuiDescriptionListTitle>
            <strong>Interval</strong>{' '}
            <EuiIconTip
              content="Time bucket interval generated at roll-up time"
            />
          </EuiDescriptionListTitle>

          <EuiDescriptionListDescription>
            {dateHistogramInterval}
          </EuiDescriptionListDescription>
        </EuiDescriptionList>

        {this.renderStats()}
      </Fragment>
    );
  }
}