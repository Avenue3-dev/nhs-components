import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Default as DefaultStory } from './Details.stories';

const Default = composeStory(DefaultStory, meta);

it('should render the Details component', () => {
  const { container } = render(<Default />);

  expect(container).toMatchSnapshot();
});
