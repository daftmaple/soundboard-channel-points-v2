import { EventEmitter } from 'events';

// Setup EventEmitter
const events = new EventEmitter();
events.setMaxListeners(0);

export { events };
