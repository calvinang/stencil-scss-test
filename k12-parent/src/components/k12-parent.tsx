import { Component} from '@stencil/core';
import "@k12/k12-stencil-test/k12-child";

@Component({
  tag: 'app-k12-parent',
  styleUrl: './styles.scss'
})
export class ParentComponent {
  constructor() {

  }

  render() {
      return (
        <div>
          <div>parent component</div>
          <div>
            <app-k12-child></app-k12-child>                    
          </div>
        </div>
      );      
  }
}
