import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'boton2',

  add: (world, component) => {
    const audio = new Audio('./audio/Proposíto_tony.mp3')

    world.events.addListener(component.eid, 'tap', () => {
      audio.play()
    })
  },
})