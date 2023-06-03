export interface IClinic {
    name: string;
    state: string;
    availability: IClinicAvailability;
}

export interface IClinicAvailability {
    from: string;
    to: string;
}
