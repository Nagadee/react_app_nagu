import React from 'react'

const State = () => {
    return (
        <table align="center" border="2" width="400">
        <h4 align='center' color='blue'>RegistrationForm</h4>
        <tr>
          <td><label>Name</label></td>
          <td><input type="text" name="d1"></input></td>
        </tr>
        <tr>
          <td><label>RNO</label></td>
          <td><input type="text" name="d2"></input></td>
        </tr>
        <tr>
          <td><label>Date</label></td>
          <td><input type="date" name="d3"></input></td>
        </tr>
        </table>
  )
}

export default State