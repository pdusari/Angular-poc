import {
    Component,
    Input,
    OnChanges,
    OnInit,
    Provider,
    ViewChild,
    forwardRef
} from '@angular/core';

import {
    ComboComponent
} from './combo.component';

@Component({
    moduleId: module.id,
    selector: 'ng-select',
    templateUrl: './select.component.html',
    styleUrls: ['./combo.styles.css'],
    inputs: ['optionValues', 'options', 'theme', 'placeholder', 'allowClear']

})

export class SelectComponent {

   private S2: string = 'select2';
    private S2_CONTAINER: string = this.S2 + '-container';
    private S2_SELECTION: string = this.S2 + '-selection';

    options: Array < any > ;
    optionValues: Array < any > ;
    theme: string;
    multiple: boolean;
    placeholder: string;
    allowClear: boolean;

   // State variables.
    private isDisabled: boolean = false;
    private isBelow: boolean = true;
    private isOpen: boolean = false;
    private hasFocus: boolean = false;


     private width: number;
    private top: number;
    private left: number;
 value: Array<string> = [];
      private selection: Array<any> = [];
private optionsDict: any = {};
onChange = (_: any) => {};
    @ViewChild('container') container: any;

    ngOnInit() {
        
           this.width = this.container.nativeElement.offsetWidth;
           this.initOptions();
        }

   initOptions() {
        let values: any[] = [];
        let opts = {};

        for (let option of this.options) {
            opts[option.value] = {
                value: option.value,
                label: option.label,
                selected: false
            };
            values.push(option.value);
        }

        this.optionValues = values;
        this.optionsDict = opts;
          console.log(this.optionValues);
    }

    onSelectionClick(event: any) {
        this.toggleDropdown();

        event.stopPropagation();
    }
 toggleDropdown() {
        if (!this.isDisabled) {
            this.isOpen ? this.close(true) : this.open();
        }
    }

        open() {
        this.updateWidth();
        this.updatePosition();
        this.isOpen = true;
    }

    close(focus: boolean) {
        this.isOpen = false;
    }
     updateWidth() {
        this.width = this.container.nativeElement.offsetWidth;
    }
     updatePosition() {
        let e = this.container.nativeElement;
        this.left = e.offsetLeft;
        this.top = e.offsetTop + e.offsetHeight;
    }

  getSelectionClass(): any {
        let result = {};

        let s = this.S2_SELECTION;
        result[s] = true;
        result[s + '--single'] = true;

        return result;
    }
      onToggleSelect(optionValue: any) {
        this.toggleSelect(optionValue);
    }


  showPlaceholder(): boolean {
        return typeof this.placeholder !== 'undefined' &&
            this.selection.length === 0;
    }

    getPlaceholder(): string {
        return this.showPlaceholder() ? this.placeholder : '';
    }

    
   toggleSelect(value: string) {

        if (this.selection.length > 0) {
            this.selection[0].selected = false;
        }

        this.optionsDict[value].selected = !this.optionsDict[value].selected;
        this.updateSelection();
    }

        updateSelection() {
        let s: Array<any> = [];
        let v: Array<string> = [];
        for (let optionValue of this.optionValues) {
            if (this.optionsDict[optionValue].selected) {
                let opt = this.optionsDict[optionValue];
                s.push(opt);
                v.push(opt.value);
            }
        }

        this.selection = s;
        this.value = v;

        // TODO first check if value has changed?
        this.onChange(this.getOutputValue());
    }

      getOutputValue(): any {
        if (this.multiple) {
            return this.value.slice(0);
        }
        else {
            return this.value.length === 0 ? '' : this.value[0];
        }
    }

}