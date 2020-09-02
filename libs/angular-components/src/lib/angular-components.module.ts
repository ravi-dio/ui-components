import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { GoAButtonComponent } from './button/button.component';
import { GoAMicrositeLogoComponent } from './microsite-logo/microsite-logo.component';
import { GoAFooterComponent } from './footer/footer.component';
import { GoAHeaderComponent } from './header/header.component';
import { GoAButtonLinkComponent } from './button-link/button-link.component';
import { GoAOptionComponent } from './dropdown/option/option.component';
import { GoAOptionGroupComponent } from './dropdown/option-group/option-group.component';
import { GoADropdownComponent } from './dropdown/dropdown.component';
import { GoACheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    FormsModule,
    GoAButtonComponent,
    GoAMicrositeLogoComponent,
    GoAFooterComponent,
    GoAHeaderComponent,
    GoAButtonLinkComponent,
    GoAOptionComponent,
    GoADropdownComponent,
    GoAOptionGroupComponent,
    GoACheckboxComponent
  ],
  declarations: [
    GoAButtonComponent,
    GoAMicrositeLogoComponent,
    GoAFooterComponent,
    GoAHeaderComponent,
    GoAButtonLinkComponent,
    GoAOptionComponent,
    GoADropdownComponent,
    GoAOptionGroupComponent,
    GoACheckboxComponent
  ],
  bootstrap: [CommonModule]
})
export class AngularComponentsModule {}
