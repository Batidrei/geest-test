import { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import SearchFilter from './components/SearchFilter';
import SkeletonList from './components/atoms/SkeletonList';
import initialContacts from './data/data.json';
import { Contact } from './types/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import './App.css';

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filterDepartment, setFilterDepartment] = useState<string>('');

  // Simulamos la carga de datos con un efecto
  useEffect(() => {
    const timer = setTimeout(() => {
      setContacts(initialContacts as Contact[]);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Funciones para agregar, eliminar y filtrar contactos
  const handleAddContact = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (id: string) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter((contact) => {
    const coincideNombre = contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    const coincideDepto = filterDepartment === '' || contact.department === filterDepartment;
    return coincideNombre && coincideDepto;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Gestor de Usuarios
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="d-flex align-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors shadow-sm cursor-pointer"
          >
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            Nuevo usuario
          </button>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterDepartment={filterDepartment}
          onFilterDepartmentChange={setFilterDepartment}
        />

        {isLoading ? (
          <SkeletonList />
        ) : (
          <ContactList
            contacts={filteredContacts}
            searchTerm={searchTerm}
            onDeleteContact={handleDeleteContact}
          />
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-lg transition-opacity">
          <div className="w-full max-w-xl">
            <AddContact
              onAddContact={handleAddContact}
              onClose={() => setIsModalOpen(false)} // Función para cerrarlo
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default App;