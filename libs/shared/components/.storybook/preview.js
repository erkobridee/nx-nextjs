import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '@nx-nextjs/shared/assets/styles/fonts.scss';
import '@nx-nextjs/shared/assets/styles/tailwind.scss';

addDecorator(withKnobs);
