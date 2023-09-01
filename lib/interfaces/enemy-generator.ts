export interface IEnemyGenerator {

    enemySpanwRate: number

    generate(): void
}

export interface IEnemyGeneratorConfigs{

    enemySpawnRate: number

}