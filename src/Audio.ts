import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'AudioButton',

  schema: {
    audioEntity: ecs.eid,
  },

  stateMachine: ({world, eid, schemaAttribute}) => {

    ecs.defineState('initial-state')
      .initial()

      .listen(eid, ecs.input.UI_CLICK, () => {

        console.log('BOTON PRESIONADO')

        const audioEntity = schemaAttribute.get(eid).audioEntity

        console.log('AUDIO:', audioEntity)

        if (!audioEntity) {
          console.log('NO HAY AUDIO ASIGNADO')
          return
        }

        ecs.Audio.mutate(world, audioEntity, (cursor) => {
          cursor.paused = !cursor.paused
        })

        console.log('AUDIO CAMBIADO')
      })
  },
})