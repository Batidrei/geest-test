import { useFormik } from 'formik';
import * as Yup from 'yup';

// Agregamos onClose a las props
export default function AddContact({
  onAddContact,
  onClose
}: {
  onAddContact: Function;
  onClose: () => void;
}) {

  // Definimos el esquema de validación con Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().email('Ingresa un correo válido').required('El correo es obligatorio'),
    phone: Yup.string(),
    department: Yup.string().required('Debes seleccionar un departamento')
  });

  // Configuramos Formik
  const formik = useFormik({
    initialValues: { name: '', email: '', phone: '', department: '' },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newContact = { id: crypto.randomUUID(), ...values };
      onAddContact(newContact);
      console.log('Nuevo contacto agregado:', newContact);
      resetForm();
      onClose();
    },
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Agregar nuevo contacto</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="bg-white border-gray-200">

            {/* Input: Nombre */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nombre:<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Ayuda a saber si el campo fue "tocado"
                className={`placeholder:text-gray-500 mt-1 block w-full rounded-md shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500
              ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'}`
                }
                placeholder="Ej. Juan Pérez"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
              )}
            </div>

            {/* Input: Correo */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Correo:<span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`placeholder:text-gray-500 mt-1 block w-full rounded-md shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500
              ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`
                }
                placeholder="ana@ejemplo.com"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Input: Teléfono */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Teléfono:</label>
                <input
                  type="text"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="placeholder:text-gray-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  placeholder="33 1023 3223"
                />
              </div>

              {/* Input: Rol */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Departamento:<span className="text-red-500">*</span></label>
                <select
                  name="department"
                  value={formik.values.department}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`text-gray-500 mt-1 block w-full rounded-md shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 bg-white
                ${formik.touched.department && formik.errors.department ? 'border-red-500' : 'border-gray-300'}`
                  }
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="Ventas">Ventas</option>
                  <option value="Desarrollo">Desarrollo</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Soporte">Soporte</option>
                </select>

                {/* Mensaje de error de Yup */}
                {formik.touched.department && formik.errors.department && (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.department}</div>
                )}
              </div>
            </div>

            {/* Botones */}
            <div className="flex gap-4 pt-4 mt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
                className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-75"
              >
                Guardar
              </button>
            </div>
        </div>
      </form>
    </div>
  );
}