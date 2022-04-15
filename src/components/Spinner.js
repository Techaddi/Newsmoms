import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <>
      <div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div></>
    )
  }
}

export default Spinner
