"use client";
import Input from "@/components/formulario/Input";
import Label from "@/components/formulario/Label";
import { useState } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    genero: "",
    dataNascimento: "",
    contatoEmergencia: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // #TODO submit cadastro paciente
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Nome</Label>
        <Input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label>Telefone</Label>
        <Input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label>Gênero</Label>
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
          <option value="nao_informar">Prefiro não informar</option>
        </select>
      </div>
      <div>
        <Label>Data de Nascimento</Label>
        <Input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label>Contato de Emergência</Label>
        <Input
          type="tel"
          name="contatoEmergencia"
          value={formData.contatoEmergencia}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
      >
        Cadastrar
      </button>
    </form>
  );
}
