import { Component, h } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class ButtonComponent {

  render() {
    return (
      <button>YEET</button>
    );
  }

}
