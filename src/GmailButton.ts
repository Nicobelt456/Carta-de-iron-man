import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'gmail-button',

  add: (world, component) => {

    world.events.addListener(
      component.eid,
      ecs.input.UI_CLICK,
      () => {

        window.location.href =
          'mailto:nb.digital.contenido@gmail.com'

      }
    )
  },
})