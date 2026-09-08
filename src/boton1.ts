import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'boton1',

  add: (world, component) => {
    const audio = new Audio('./audio/Origen_tony.mp3')

    component.eid
    world.events.addListener(component.eid, 'tap', () => {
      audio.play()
    })
  },
})