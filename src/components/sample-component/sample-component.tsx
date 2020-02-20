import { Component, Host, h } from '@stencil/core';
@Component({
  tag: 'sample-component',
  styleUrl: 'sample-component.css',
  shadow: false,
  scoped: true
})
export class SampleComponent {
  render() {
    return (<Host>
    <igc-input-group>
    <span slot="prefix">+359</span>
    <label>Phone</label>
    <input type="number" />
    <span slot="suffix" class="material-icons icon">phone</span>
    </igc-input-group>
    </Host>);
  }
}
