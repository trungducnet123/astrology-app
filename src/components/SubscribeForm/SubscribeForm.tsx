import React, { Component } from 'react';

class KabalaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      day: '',
      month: '',
      year: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, day, month, year } = this.state;
    // Thêm xử lý submit tại đây (ví dụ: gửi dữ liệu lên server)
  };

  render() {
    const { name, day, month, year } = this.state;
    return (
        <form method="GET" action="https://number.kabala.vn/" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="name"><strong>Họ Tên:</strong></label>
            <input type="text" placeholder="Họ tên của bạn" name="name" id="name" value={name} onChange={this.handleInputChange} required />
            <label htmlFor="name"><strong>Ngày sinh:</strong></label>
            <input type="number" placeholder="Ngày" name="day" id="day" value={day} onChange={this.handleInputChange} min="1" max="31" required />
            <input type="number" placeholder="Tháng" name="month" id="month" value={month} onChange={this.handleInputChange} min="1" max="12" required />
            <input type="number" placeholder="Năm" name="year" id="year" value={year} onChange={this.handleInputChange} min="1900" max="2099" required />
            <input type="submit" className="button tiny success" value="Xem ngay" />
          </div>
        </form>
    );
  }
}

export default KabalaForm;
