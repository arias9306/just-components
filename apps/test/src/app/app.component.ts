import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@just-components/button';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: 'cmp-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test';

  disabledButton = signal(false);

  disabled() {
    this.disabledButton.update((v) => !v);
  }
}
