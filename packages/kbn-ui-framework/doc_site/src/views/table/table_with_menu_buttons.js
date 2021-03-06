/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';

import {
  KuiTable,
  KuiTableRow,
  KuiTableRowCell,
  KuiTableHeaderCell,
  KuiTableHeader,
  KuiTableBody,
} from '../../../../components';

import {
  RIGHT_ALIGNMENT
} from '../../../../src/services';

export function TableWithMenuButtons() {
  return (
    <KuiTable>
      <KuiTableHeader>
        <KuiTableHeaderCell>
          Reminder
        </KuiTableHeaderCell>
        <KuiTableHeaderCell>
          A
        </KuiTableHeaderCell>
        <KuiTableHeaderCell>
          B
        </KuiTableHeaderCell>
        <KuiTableHeaderCell>
          C
        </KuiTableHeaderCell>
        <KuiTableHeaderCell className="kuiTableHeaderCell--alignRight">
          Actions
        </KuiTableHeaderCell>
      </KuiTableHeader>

      <KuiTableBody>
        <KuiTableRow>
          <KuiTableRowCell>
            Core temperature critical
          </KuiTableRowCell>
          <KuiTableRowCell>
            A
          </KuiTableRowCell>
          <KuiTableRowCell>
            B
          </KuiTableRowCell>
          <KuiTableRowCell>
            C
          </KuiTableRowCell>
          <KuiTableRowCell align={RIGHT_ALIGNMENT}>
            <div className="kuiMenuButtonGroup kuiMenuButtonGroup--alignRight">
              <button className="kuiMenuButton kuiMenuButton--basic">
                Acknowledge
              </button>
              <button className="kuiMenuButton kuiMenuButton--basic">
                Silence
              </button>
              <button className="kuiMenuButton kuiMenuButton--danger">
                Delete
              </button>
            </div>
          </KuiTableRowCell>
        </KuiTableRow>

        <KuiTableRow>
          <KuiTableRowCell>
            Time for your snack
          </KuiTableRowCell>
          <KuiTableRowCell>
            A
          </KuiTableRowCell>
          <KuiTableRowCell>
            B
          </KuiTableRowCell>
          <KuiTableRowCell>
            C
          </KuiTableRowCell>
          <KuiTableRowCell align={RIGHT_ALIGNMENT}>
            <div className="kuiMenuButtonGroup kuiMenuButtonGroup--alignRight">
              <button className="kuiMenuButton kuiMenuButton--basic">
                Acknowledge
              </button>
              <button className="kuiMenuButton kuiMenuButton--basic">
                Silence
              </button>
              <button className="kuiMenuButton kuiMenuButton--danger">
                Delete
              </button>
            </div>
          </KuiTableRowCell>
        </KuiTableRow>
      </KuiTableBody>
    </KuiTable>
  );
}
