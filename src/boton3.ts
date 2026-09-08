import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'boton3',

  add: (world, component) => {
    const audio = new Audio('./audio/sentido_heroe.mp3')

    world.events.addListener(component.eid, 'tap', () => {
      audio.play()
    })
  },
})