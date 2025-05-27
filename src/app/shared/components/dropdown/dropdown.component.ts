import { Component, ElementRef, input, OnDestroy, Renderer2 } from '@angular/core';
import { Item } from '../../types/item.type';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent implements OnDestroy {
  iconName = input<string>();
  dropdownValues = input.required<Item[]>();

  selectedValue: Item | undefined;

  isOpen = false;

  private globalClickUnlistener: () => void;

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef
  ) {
    this.globalClickUnlistener = this.renderer.listen('document', 'click', (event) => {
      if (!this.elRef.nativeElement.contains(event.target)) {
        this.isOpen = false;
      }
    });
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectDropdownValue(dropdownValue: Item) {
    this.selectedValue = dropdownValue;
    this.isOpen = false;
  }

  ngOnDestroy(): void {
    if (this.globalClickUnlistener) {
      this.globalClickUnlistener();
    }
  }
}
