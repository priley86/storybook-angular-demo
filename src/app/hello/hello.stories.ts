import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs/angular';
import { HelloWrapperComponent } from './hello-wrapper.component';

storiesOf('Hello', module)
  .addDecorator(withKnobs)
  .add('with slot styles',
    withNotes({ text: 'My custom notes on this component... 😎🐵🐷' })(() => {
    const buttonClass = select(
      'ButtonClass',
      ['', 'btn-primary', 'btn-accent', 'btn-warn']
    );
    const bold = boolean('Bold', false);
    const disabled = boolean('Disabled', false);
    const slot = text('Slot', 'Hello Shadow Dom!');

    return {
      component: HelloWrapperComponent,
      props: {
        buttonClass,
        bold,
        disabled,
        slot,
        onClick: action('onClick fired')
      }
    };
  })
);
