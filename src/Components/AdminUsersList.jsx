import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserIcon, MailIcon, ShieldCheckIcon } from "lucide-react";

const AdminUsersList = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Jannat",
      email: "Jannat@example.com",
      role: "Admin"
    },
    {
      id: 2,
      name: "Salma",
      email: "salma@example.com",
      role: "User"
    }
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAdd = () => {
    const newUser = {
      id: Date.now(),
      name: "Nouvel Utilisateur",
      email: "nouveau@exemple.com",
      role: "User"
    };
    setUsers([newUser, ...users]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-purple-900 text-white p-6 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-wide">👤 Liste des Utilisateurs</h1>
        <Button onClick={handleAdd} className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl shadow-lg">+ Ajouter Utilisateur</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <Card key={user.id} className="bg-gray-900 text-white shadow-2xl rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <UserIcon className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold">{user.name}</h2>
              </div>
              <div className="flex items-center gap-3 text-gray-300 mb-2">
                <MailIcon className="w-5 h-5 text-purple-300" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <ShieldCheckIcon className="w-5 h-5 text-purple-300" />
                <span>{user.role}</span>
              </div>
              <div className="mt-6 flex gap-3">
                <Button className="bg-yellow-500 hover:bg-yellow-600 w-full rounded-xl">Modifier</Button>
                <Button onClick={() => handleDelete(user.id)} className="bg-red-600 hover:bg-red-700 w-full rounded-xl">Supprimer</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminUsersList;
