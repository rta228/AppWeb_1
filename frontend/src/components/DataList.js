import React, { Component } from "react";
import { Table } from "reactstrap";
import EditDataModal from "./EditDataModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class DataList extends Component {
  render() {
    const data = this.props.data;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Data</th>
            <th>Data2</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!data || data.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            data.map(d => (
              <tr key={d.pk}>
                <td>{d.data}</td>
                <td>{d.data2}</td>
                <td>{d.email}</td>
                <td align="center">
                  <EditDataModal
                    create={false}
                    data={d}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={d.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default DataList;
