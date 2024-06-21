import { Measurement } from "~/entity/measurement"

export interface ListMeasurementsQuery {
  startDate?: Date
  endDate?: Date
  limit?: number
  offset?: number
}

export interface MeasurementRepository {
  createMeasurement(
    sensorId: string,
    value: number,
    datetime: Date,
  ): Promise<void>
  listMeasurements(
    sensorId: string,
    query?: ListMeasurementsQuery,
  ): Promise<Measurement[]>
}
