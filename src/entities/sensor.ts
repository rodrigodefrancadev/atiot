export interface SensorProps {
  name: string
  lastValue: number | null
  lastValueDatetime: Date | null
  createdAt: Date
}

export class Sensor implements SensorProps {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly lastValue: number | null,
    public readonly lastValueDatetime: Date | null,
    public readonly createdAt: Date,
  ) {}
}
