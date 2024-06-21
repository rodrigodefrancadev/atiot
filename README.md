# Atiot - IOT Platform

Uma plataforma para dispositivos IOT.

## Entities

Sensor

- id: int
- name: string
- lastValue: float | null
- lastUpdate: datetime | null

Measurement

- id: number
- sensorId: number
- datetime: datetime
- value: float

## ROADMAP

- [] CRETE PROJECT
- [] IMPLEMENT ENTITIES
- [] REPOSITORIES
- [] USE CASES
- - [] SENSOR
- - - [] CREATE SENSOR
- - - [] UPDATE SENSOR
- - - [] LIST SENSORS
- - - [] DETAIL SENSOR
- - - [] DELETE SENSOR
- - [] MEASUREMENT
- - - [] CREATE MEASUREMENT
- - - [] LIST MEASUREMENT BY SENSOR ID - QUERY (DATE RANGE)
- - - [] DETAIL MEASUREMENT
- [] REPOSITORIES IMPLEMENTATION
- [] USE CASE FACTORY
- [] API ENDPOINTS TESTS
- [] API ENDPOINTS IMPLEMENTATION
