import axios from "axios";

export function checkCep(cep: string) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}
