import React from 'react';
import { css, cx } from 'emotion';

const color = 'white';

function EmotionExperimentation() {
    return (
        <div className={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
            color: ${color};
            }
        `}>
            Hover to change color
        </div>
    );
}

export default EmotionExperimentation;