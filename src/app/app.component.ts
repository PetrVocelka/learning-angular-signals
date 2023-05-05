import { ChangeDetectionStrategy, Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'learning-angular-signals';

  // Signal
  valueX: WritableSignal<number> = signal<number>(5);
  valueY: WritableSignal<number> = signal<number>(3);

  // Computed
  valueXY = computed(() => this.valueX() + this.valueY());
  isEven = computed(() => this.valueXY() % 2 === 0 );

  constructor() {
    // Print the value of a signal
    console.log('The number is: ' + this.valueXY());

    // "Subscribe" to a value of the signal
    effect(() => console.log('The counter is:', this.valueXY()));
  }

  incrementValueX() {
    // Update value - updates the signal based on its current value. Use it with numbers, strings, booleans, and other primitive values.
    this.valueX.update(valueX => valueX + 1);

    // Mutate value - modifies the content of a signal value, not the signal value itself. Use it with arrays to modify array elements, and objects to modify object properties.
    // this.valueX.mutate(v => v.price = v.price + (v.price * .20));
  }

  incrementValueY() {
    // Set value - replaces the signal value with a new value. Use it with numbers, strings, booleans, and other primitive values.
    this.valueY.set(this.valueY() + 1);
  }
}
