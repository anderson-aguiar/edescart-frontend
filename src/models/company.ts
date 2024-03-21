import { AddressDTO } from "./address";
import { MaterialDTO } from "./material";

export type CompanyDTO = {
    id: number;
    name: string;
    phone: string;
    address: AddressDTO;
    materials: MaterialDTO[];
}
export type CompanyMinDTO = {
    id: number;
    name: string;
    phone: string;
    distance: number;
    address: AddressDTO;
}