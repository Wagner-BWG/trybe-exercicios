import React from 'react';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  return element;
}

const Clock = () => setInterval(tick, 100);

export default Clock;