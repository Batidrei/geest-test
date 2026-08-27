// src/components/ContactList.tsx
import { Contact } from '../types/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ContactList({
  contacts,
  searchTerm = '',
  onDeleteContact
}: {
  contacts: Contact[];
  searchTerm?: string;
  onDeleteContact: (id: string) => void;
}) {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Directorio ({contacts.length})</h2>

        {contacts.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            {/* Lógica para mostrar un mensaje u otro */}
            {searchTerm
              ? `No se encontraron usuarios con "${searchTerm}"`
              : 'No hay contactos registrados.'}
          </p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {contacts.map((contact) => (
              <li key={contact.id} className="py-4 flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                  <p className="text-sm text-gray-500">{contact.email}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-900 font-medium">{contact.department}</p>
                  <p className="text-xs text-gray-500">{contact.phone}</p>
                </div>
                <button
                  onClick={() => onDeleteContact(contact.id)}
                  className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-center cursor-pointer"
                  title="Eliminar usuario"
                  data-tooltip-target="tooltip-default"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
        Eliminar usuario
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
}