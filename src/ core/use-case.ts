export interface UseCase<P, U> {
  execute(params: P): Promise<U>
}
