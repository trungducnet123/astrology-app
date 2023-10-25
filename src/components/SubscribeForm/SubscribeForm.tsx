import React, { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../Button/Button';
import './SubscribeForm.css';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export interface FormData {
  name: string;
  day: number;
  month: number;
  year: number;
}

export const SubscribeForm = ({ onSubmit }: FormProps) => {
  const initialFormData: FormData = {
    name: '',
    day: '',
    month: '',
    year: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
  };

  const { name, day, month, year } = formData;

  return (
    <form method="GET" action="https://number.kabala.vn/" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name"><strong>Name:</strong></label>
        <input type="text" placeholder="Họ tên của bạn" name="name" id="name" value={name} onChange={handleInputChange} required />
        <label htmlFor="day"><strong>Ngày sinh:</strong></label>
        <input type="number" placeholder="Ngày" name="day" id="day" value={day} onChange={handleInputChange} min="1" max="31" required />
        <input type="number" placeholder="Tháng" name="month" id="month" value={month} onChange={handleInputChange} min="1" max="12" required />
        <input type="number" placeholder="Năm" name="year" id="year" value={year} onChange={handleInputChange} min="1900" max="2099" required />
        <input type="submit" className="button tiny success" value="Xem ngay" />
      </div>
    </form>
  );
};
