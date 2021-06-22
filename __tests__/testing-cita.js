import Citas from "../js/classes/Citas";

describe('Citas', () => {
    const citas = new Citas();

    const id = Date.now();

    test('Add Citas', () => {
        const citaObject = {
            id,
            fecha: "03.05.2020",
            hora: "10:30",
            mascota: "Sam",
            propietario: "Laura",
            sintomas: "Fiber",
            telefono: "333",
        }

        citaObject.id = id;

        citas.agregarCita(citaObject)

        expect(citas).toMatchSnapshot()
    })

    test('update Citas', () => {
        const citaUpdated = {
            id,
            fecha: "03.05.2020",
            hora: "10:30",
            mascota: "Simon",
            propietario: "Laura",
            sintomas: "Fiber",
            telefono: "333",
        }


        citas.editarCita(citaUpdated)

        expect(citas).toMatchSnapshot()
    })


    test('delete Citas', () => {
        citas.eliminarCita(id)

        expect(citas).toMatchSnapshot()
    })
})