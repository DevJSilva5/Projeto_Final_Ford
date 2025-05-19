import { Injectable } from '@angular/core';
import axios from 'axios';
import { VeiculosAPI } from '../../../utils/models/vehicle/vehicle.model';
import { VehicleData } from '../../../utils/models/vehicle/vehicleData.model';


@Injectable({
  providedIn: 'root',
})

export class ApiService {

  
  static async login(_nome: string, _senha: string){
    const credencial = { nome: _nome, senha: _senha };
    let value = axios.post('http://localhost:3500/login', credencial);
  
    value.catch(reason => {
      alert(reason.response.data.message)
    });
    
    return value.then();
  }
  static async vehicles(): Promise<VeiculosAPI>{
    let vehicles = axios.get('http://localhost:3500/vehicles');
  
    vehicles.catch(reason => {
      alert(reason.response.data.message)
    });
  
    return (await vehicles.then()).data;
  }
  
  static async vehiclesData(vinCode: string): Promise<VehicleData>{
    let vehiclesData = axios.post('http://localhost:3500/vehicleData', { vin: vinCode });
  
    return (await vehiclesData.then()).data;
  }

}
