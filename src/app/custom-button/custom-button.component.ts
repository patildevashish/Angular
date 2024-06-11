import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CutomButtonProps } from '../types';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {
  @Output() onButtonTap = new EventEmitter<string>();

  @Input() customButtonProps: CutomButtonProps = {
    btnText: 'Custom Button',
    isOutline: false,
    textSize: 'text-base',
    bgColor: 'bgColor',
    radius: 'rounded',
  }

  getBtnClass() {
    return `${
      this.customButtonProps.isOutline
        ? 'border border-neutral-900 hover:bg-neutral-200'
        : `${this.customButtonProps.bgColor} text-white  hover:bg-neutral-800`
    }  ${this.customButtonProps.textSize} px-4 py-2 ${this.customButtonProps.radius}`;
  }

  onButtonClick() {
    this.onButtonTap.emit(this.customButtonProps.btnText);
  }
}
