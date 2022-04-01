import Matter from 'matter-js';
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import Obstacle from '../components/Obstacle';

import { Dimensions } from 'react-native';
import { getPipeSizePosPair } from '../utils/random';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    world.gravity.y = 0.5;

//    world.gravity.y = 0.4;

    const pipeSizePosA = getPipeSizePosPair()
    const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9)

    return {
        physics: {engine, world},
        Bird: Bird(world, 'black', {x: 50, y: 150}, {height: 40, width: 40}),

        ObstacleTop1: Obstacle(world, 'ObstacleTop1', '#ff3300', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),

        ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', '#0080ff', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size),

        ObstacleTop2: Obstacle(world, 'ObstacleTop2', '#ff3300', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size),

        ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', '#0080ff', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

        Floor: Floor(world, 'black', {x: windowWidth / 2, y: windowHeight}, {height: 50, width: windowWidth}),

        Roof: Floor(world, 'black', {x: windowWidth / 2, y: 0}, {height: 50, width: windowWidth})

    }

}