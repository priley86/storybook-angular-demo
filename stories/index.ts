import { storiesOf } from '@storybook/angular';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { KnobsComponent } from '../app/knobs/knobs.component';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from '@storybook/addon-knobs/angular';

storiesOf('Welcome', module)
  .addDecorator(withKnobs)
  .add('to Angular Storybook', () => ({
    component: WelcomeComponent,
    props: {}
  }))
  .add('how to use Knobs', () => {
    const name = text('Name', 'Jane');
    const stock = number('Stock', 20, {
      range: true,
      min: 0,
      max: 30,
      step: 5
    });
    const fruits = {
      apples: 'Apple',
      bananas: 'Banana',
      cherries: 'Cherry'
    };
    const fruit = select('Fruit', fruits, 'apple');
    const price = number('Price', 2.25);

    const border = color('Border', 'deeppink');
    const today = date('Today', new Date('Jan 20 2017'));
    const items = array('Items', ['Laptop', 'Book', 'Whiskey']);
    const nice = boolean('Nice', true);

    return {
      component: KnobsComponent,
      props: {
        name,
        stock,
        fruits,
        fruit,
        price,
        border,
        today,
        items,
        nice
      }
    };
  });
