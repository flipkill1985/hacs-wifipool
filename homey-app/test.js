import { extractLatestValue } from './lib/wifipool.js';

// Sample data mimicking the API response structure
const sampleData = [
  {
    device_sensor_data: {
      analog: { '4': 7.2 }
    }
  }
];

const value = extractLatestValue(sampleData, '4');
if (value !== 7.2) {
  console.error('extractLatestValue failed', value);
  process.exit(1);
}
console.log('extractLatestValue passed with value:', value);
