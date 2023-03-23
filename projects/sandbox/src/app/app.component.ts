import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Découvrir des directives d'attribut!</h1>
    <a no-open href="http://google.fr/">Go to Google</a>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem
      illum modi amet quisquam necessitatibus perspiciatis fugiat.
    </p>
    <p highLight default-color="red" background-color="blue">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat aliquid
      exercitationem quis iure earum sunt quia nam unde autem architecto sit
      amet consectetur adipisicing elit. Officia autem illum modi amet quisquam
      necessitatibus?
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident magni
      ea sunt.
    </p>
  </div>
  `,
  styles: [`
  h1{
    color: blue;
  }`],
})
export class AppComponent {
  title = 'sandbox';
}
