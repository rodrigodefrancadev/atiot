export class Sensor {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly lastValue: number | null,
    public readonly lastValueDatetime: Date | null,
    public readonly createdAt: Date,
  ) {}
}
