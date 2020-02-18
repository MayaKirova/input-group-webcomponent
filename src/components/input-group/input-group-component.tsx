import { Component, Host, Prop, h, Listen, State, Element } from '@stencil/core';

@Component({
  tag: 'igc-input-group',
  styleUrl: 'input-group-component.scss',
  shadow: false,
  scoped: true
})
export class IgcInputGroupComponent {

  @Prop() 
  get value() {
    return this.host.getElementsByTagName('input').item(0).value;
  }

  @Element() host: HTMLDivElement;


  @State() isFocused: boolean = false;
  
  @State() get isFilled() {
    return this.value.length > 0;
  }

  @Listen('focus', { capture: true })
  handleFocus() {
    this.isFocused = true;
  }

  @Listen('blur', { capture: true })
  handleBlur() {
    this.isFocused = false;
  }

  render() {
    return (
      <Host>
        <div class={this.isFocused || this.isFilled ? "igx-input-group-bundle active" : "igx-input-group-bundle "}>
        <div class='prefix'>
              <slot name="prefix"/>
        </div>
        <div class='igx-input-group-main' >
            <slot/>
        </div>
        <div class='suffix'>
              <slot name="suffix"/>
        </div>
        </div>
      </Host>
    );
  }
}
