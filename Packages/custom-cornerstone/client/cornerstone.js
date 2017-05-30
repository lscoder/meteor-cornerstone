import * as cornerstone from 'cornerstone-core';

// Adding a new custom property
cornerstone.customProperty = 'My custom cornerstone property';

// Replacing `getStoredPixels` by a custom implementation
cornerstone.getStoredPixels = function() {
    return 'custom getStoredPixels called';
}

export default cornerstone;
