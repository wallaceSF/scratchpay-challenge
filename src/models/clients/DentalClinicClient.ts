export class DentalClinicClient {
    name: string;
    stateName: string;
    availability: DentalClinicClientOpening;
}

export class DentalClinicClientOpening {
    from: string;
    to: string;
}