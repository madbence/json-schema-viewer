import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { JsonSchema, JsonSchema1 } from '../schema';
import { SchemaView, SchemaViewProps } from '../SchemaView';
import { SchemaReturnerLookup } from './schema-returner-lookup';
import { IdLookup, InternalLookup } from '../lookup';
import { Schema as PackageJson } from './package.json';
import { DebuggingMemoryRouter } from './DebuggingMemoryRouter';

export default {
   title: 'JsonSchema/SchemaView',
   component: SchemaView,
   argTypes: {
   },
} as Meta;

const Template: Story<SchemaViewProps> = (args) => (
   <DebuggingMemoryRouter initialEntries={['/base']}>
      <SchemaView {...args} />
   </DebuggingMemoryRouter>
);

const defaultArgs: Partial<SchemaViewProps> = {
   basePathSegments: ['base'],
   stage: 'both'
};

export const DefaultView = Template.bind({});
DefaultView.args = {
   ...defaultArgs,
   schema: {
      type: 'object',
      additionalProperties: false,
      required: ['A'],
      properties: {
         A: { type: 'string' },
         B: { type: 'number' }
      }
   }
};

export const PackageJSONStory = Template.bind({});
PackageJSONStory.storyName = 'package.json';
PackageJSONStory.args = {
   ...defaultArgs,
   schema: PackageJson
};