import { Component} from '@stencil/core';

@Component({
  tag: 'app-k12-child',
  styleUrl: './styles.scss'
})
export class ChildComponent {
  constructor() {

  }

  render() {
      return (
        <div>
          <div class="k12-child-style">
            child component
          </div>
          <div class="k12-another-style">
            text based on another style
          </div>
        </div>
      );      
  }
}
