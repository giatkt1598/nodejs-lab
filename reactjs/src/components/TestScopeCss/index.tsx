import React from 'react';
import Child from './Child';
import Parent from './Parent';

export default function TestScopeCss() {
  return (
    <div>
      <Parent>
        <Child>
          Son of child
        </Child>
      </Parent>
    </div>
  );
}
