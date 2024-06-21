import { UseCase } from "~/ core/use-case"
import { Sensor, SensorProps } from "~/entities/sensor"
import { SensorRepository } from "~/repositories/sensor-repository"

interface CreateSensorUseCaseParams {
  name: string
}

export class CreateSensorUseCase
  implements UseCase<CreateSensorUseCaseParams, Sensor>
{
  constructor(private sensorRepository: SensorRepository) {}

  async execute(params: CreateSensorUseCaseParams): Promise<Sensor> {
    const sensorProps: SensorProps = {
      createdAt: new Date(),
      lastValue: null,
      lastValueDatetime: null,
      name: params.name,
    }
    return await this.sensorRepository.createSensor(sensorProps)
  }
}
