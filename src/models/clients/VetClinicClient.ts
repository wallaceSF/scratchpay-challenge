export class VetClinicClient {
    clinicName: string;
    stateCode: string;
    opening: VetClinicClientOpening;
}

export class VetClinicClientOpening {
    from: string;
    to: string;
}