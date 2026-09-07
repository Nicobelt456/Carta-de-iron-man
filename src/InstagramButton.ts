import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'instagram-button',

  add: (world, component) => {

    world.events.addListener(
      component.eid,
      ecs.input.UI_CLICK,
      () => {

        window.open(
          'https://www.instagram.com/nb_dc_/',
          '_blank'
        )

      }
    )
  },
})