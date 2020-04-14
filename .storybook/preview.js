import 'loki/configure-react';
import  { addDecorator } from '@storybook/react';
import  { withPropsTable } from 'storybook-addon-react-docgen';

addDecorator(withPropsTable);