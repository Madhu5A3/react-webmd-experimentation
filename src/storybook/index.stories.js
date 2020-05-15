import React from 'react';
import { Button } from '@storybook/react/demo';
// import { Button } from '../components/button/Button';

export default { title: 'Button', component: Button };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
    <Button>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
    </span>
    </Button>
);