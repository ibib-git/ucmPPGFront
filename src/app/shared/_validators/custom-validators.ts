import {FormGroup} from '@angular/forms';

export class CustomValidators {

    static compare( ...args: any) {
        return (group: FormGroup) => {
            const first = group.get(args[0]);
            const second = group.get(args[1]);

            if (!first || !second) { return null; }
            if (first.value !== second.value) {
                return {matchError : 'Not match'};
            } else { return null; }
        };
    }
}
