import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'linkedin-button',

  add: (world, component) => {

    world.events.addListener(
      component.eid,
      ecs.input.UI_CLICK,
      () => {

        window.open(
          'https://www.linkedin.com/in/nicolas-pineda-62192b123/',
          '_blank'
        )

      }
    )
  },
})