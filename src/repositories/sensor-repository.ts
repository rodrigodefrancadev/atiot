import { Sensor, SensorProps } from "~/entities/sensor"

export interface SensorRepository {
  createSensor(sensorProps: SensorProps): Promise<void>
  getSensorById(id: number): Promise<Sensor | null>
  getSensors(): Promise<Sensor[]>
  updateSensorName(id: number, name: string): Promise<void>
  deleteSensor(id: string): Promise<void>
}
