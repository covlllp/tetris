import * as React from 'react';
import { render } from 'react-dom';

import { Canvas } from 'component/canvas';

render(
  <div>
    Hello World!
    <div>
      <Canvas />
    </div>
  </div>,
  document.getElementById('react-content'),
);
