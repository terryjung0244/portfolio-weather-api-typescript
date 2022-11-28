import { weatherModel } from '../model/weatherModel';

export interface CurrentLocationType {
  lat: number;
  lon: number;
}

export interface WeatherBoxPropsType {
  result: weatherModel;
}

// interface User {
//   department: string;
//   manager: string;
// }

// interface Employee extends User {
//   employeeId: string;
//   name: string;
// }

// const employee: Employee = {
//   employeeId: 'a',
//   name: 'a',
//   department: 'a',
//   manager: 'a'
// }
