export class Measurement {
  constructor(
    public readonly id: number,
    public readonly sensorId: string,
    public readonly value: number,
    public readonly datetime: Date,
  ) {}
}
