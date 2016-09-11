import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {
    FormControl,
    FormGroup
} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'combo-box',
    templateUrl: './combo.component.html',
    inputs: ['multiple', 'optionValues', 'optionsDict', 'selection', 'width', 'top', 'left'],
    outputs: ['close', 'toggleSelect'],
    styleUrls: ['./combo.styles.css']
})
export class ComboComponent {

    private MSG_LOADING = 'Searching...'; // TODO
    private MSG_NOT_FOUND = 'No results found';
    multiple: boolean;
    optionValues: Array < string > ;
    optionsDict: any;
    selection: Array < any > ;
    width: number;
    top: number;
    left: number;
    close = new EventEmitter < boolean > ();
    toggleSelect = new EventEmitter < string > ();
    private optionValuesFiltered: Array < string > = [];
    private _highlighted: any = null;
    // Class names.
    private S2: string = 'select2';
    private S2_RESULTS: string = this.S2 + '-results';
    private S2_MSG: string = this.S2_RESULTS + '__message';
    private S2_OPTIONS: string = this.S2_RESULTS + '__options';
    private S2_OPTION: string = this.S2_RESULTS + '__option';
    private S2_OPTION_HL: string = this.S2_OPTION + '--highlighted';

    @ViewChild('input') input: any;
    @ViewChild('optionsList') optionsList: any;

    ngOnInit() {
        this.init();
    }

    onInputClick(event: any) {
        event.stopPropagation();
    }

    onOptionsClick(event: any) {
        this.toggleSelect.emit(event.target.dataset.value);
    }

    onInput(event: any) {
        this.filter(event.target.value);
    }


    /***************************************************************************
     * Initialization.
     **************************************************************************/

    private init() {
        this.optionValuesFiltered = this.optionValues;

    }
    private getOptionClass(optionValue: string): any {
        let result = {};
        // let hlValue = this.highlighted === null ? '' : this.highlighted.value;

        result[this.S2_OPTION] = true;
        //result[this.S2_OPTION_HL] = optionValue === hlValue;
        result[this.S2_MSG] = optionValue === null;

        return result;
    }

    get highlighted(): any {
        return this._highlighted;
    }
    filter(term: string) {
        // // Nothing to filter, set all options.
        if (term.trim() === '') {
            this.optionValuesFiltered = this.optionValues;
        }

        // // Clone list of option values.
        let filtered = this.optionValues.slice(0);

        // // Backwards iterate over list of options (to remove options).
        for (let i = this.optionValues.length - 1; i >= 0; i--) {
            this.optionsDict = this.optionValues[i];
            // console.log(this.optionsDict);
            let label = this.optionsDict.label;

            let a = label.toUpperCase();
            let b = term.toUpperCase();

            if (a.indexOf(b) === -1) {
                filtered.splice(i, 1);
            }
        }

        // // Set filtered option values.
        this.optionValuesFiltered = filtered;


    }
}