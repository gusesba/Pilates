"use client";
import Botao from "@/components/ui/botao/Botao";
import Input from "@/components/ui/formulario/Input";
import Label from "@/components/ui/formulario/Label";
import Select from "@/components/ui/formulario/Select";
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
        <Select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
          <option value="nao_informar">Prefiro não informar</option>
        </Select>
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
      <Botao type="submit">Cadastrar</Botao>
    </form>
  );
}
