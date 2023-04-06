import {useClickOutside} from './../hooks/useClickOutside';
import {renderHook} from '@testing-library/react-hooks';

describe('useClickOutside', () => {
  
    it('Устанавливаем setOpen в значение false при клике снаружи компонента', () => {
        const setOpen = jest.fn()
        const ref = { 
            current: document.createElement('div') 
        }

        renderHook(() => useClickOutside(ref, setOpen))

        expect(setOpen).not.toHaveBeenCalled()

        document.body.click()

        expect(setOpen).toHaveBeenCalled()
    })

    it('Не меняем значение setOpen при клике внутри компонента', () => {
        const setOpen = jest.fn()
        const ref = { 
            current: document.createElement('div') 
        }

        renderHook(() => useClickOutside(ref, setOpen))

        expect(setOpen).not.toHaveBeenCalled()

        ref.current.click()

        expect(setOpen).not.toHaveBeenCalled()
    })
})