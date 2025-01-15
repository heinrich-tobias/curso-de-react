import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Input from "./Input";

function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => onTaskAdd(title, description)}
        className="bg-slate-500 text-white px-4 py-2 p-2 rounded-md font-medium flex"
      >
        <PlusIcon />
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
