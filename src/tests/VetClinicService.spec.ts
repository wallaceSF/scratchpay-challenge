import 'mocha';
import {expect} from "chai";

import {VetClinicService} from "../services/VetClinicService";
import {IClinic} from "../models/IClinic";

describe('VetClinicService', () => {
    it('Test return vet clinic client', () => {
        let vetClinicService = new VetClinicService();
        const vetClinic = vetClinicService.getClinic();

        return vetClinic.then((clinicList: IClinic[]) => {
            clinicList.forEach((clinic: IClinic) => {
                expect(clinic.name).to.be.a('string');
                expect(clinic.state).to.be.a('string');
                expect(clinic.availability.from).to.be.a('string');
                expect(clinic.availability.to).to.be.a('string');
            })
        })
    });

    it('Test check is instance of Promise', () => {
        let vetClinicService = new VetClinicService();
        const vetClinic = vetClinicService.getClinic();

        expect(vetClinic instanceof Promise).to.equal(true);
    });
});