import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'Video',

  schema: {
    videoEntity: ecs.eid,
  },

  stateMachine: ({world, eid, schemaAttribute}) => {

    ecs.defineState('initial-state')
      .initial()

      .listen(eid, ecs.input.UI_CLICK, () => {

        console.log('BOTÓN PRESIONADO')

        const videoEntity = schemaAttribute.get(eid).videoEntity

        console.log('VIDEO:', videoEntity)

        if (!videoEntity) {
          console.log('NO HAY VIDEO ASIGNADO')
          return
        }

        ecs.VideoControls.mutate(world, videoEntity, (cursor) => {
          cursor.paused = !cursor.paused
        })

        console.log('VIDEO CAMBIADO')

      })
  },
})