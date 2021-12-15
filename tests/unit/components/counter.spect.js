import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    test('Debe de hacer match con el snapshot', () => {

        const wrapper = shallowMount( Counter )  // Envuelve todo el componente 
        // Podemos evaluar muchas cosas gracias al wrapper
        expect( wrapper.html() ).toMatchSnapshot() // Debe hacer match con e html


    })

})

