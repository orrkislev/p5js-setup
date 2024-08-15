import globals from "globals";
import js from "@eslint/js";

// p5.js global functions
const p5GlobalFunctions = [
  'alpha', 'blue', 'brightness', 'color', 'green', 'hue', 'lerpColor', 'lightness', 'red', 'saturation',
  'background', 'clear', 'colorMode', 'fill', 'noFill', 'noStroke', 'stroke',
  'arc', 'ellipse', 'circle', 'line', 'point', 'quad', 'rect', 'square', 'triangle',
  'ellipseMode', 'noSmooth', 'rectMode', 'smooth', 'strokeCap', 'strokeJoin', 'strokeWeight',
  'bezier', 'bezierDetail', 'bezierPoint', 'bezierTangent', 'curve', 'curveDetail', 'curveTightness', 'curvePoint', 'curveTangent',
  'beginContour', 'beginShape', 'bezierVertex', 'curveVertex', 'endContour', 'endShape', 'quadraticVertex', 'vertex',
  'applyMatrix', 'resetMatrix', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'shearX', 'shearY', 'translate',
  'createVector',
  'abs', 'ceil', 'constrain', 'dist', 'exp', 'floor', 'lerp', 'log', 'mag', 'map', 'max', 'min', 'norm', 'pow', 'round', 'sq', 'sqrt',
  'noise', 'noiseDetail', 'noiseSeed',
  'randomSeed', 'random', 'randomGaussian',
  'acos', 'asin', 'atan', 'atan2', 'cos', 'sin', 'tan', 'degrees', 'radians',
  'angleMode',
  'textAlign', 'textLeading', 'textSize', 'textStyle', 'textWidth', 'textAscent', 'textDescent',
  'loadFont', 'text', 'textFont',
  'append', 'arrayCopy', 'concat', 'reverse', 'shorten', 'shuffle', 'sort', 'splice', 'subset',
  'float', 'int', 'str', 'boolean', 'byte', 'char', 'unchar', 'hex', 'unhex',
  'join', 'match', 'matchAll', 'nf', 'nfc', 'nfp', 'nfs', 'split', 'splitTokens', 'trim',
  'day', 'hour', 'minute', 'millis', 'month', 'second', 'year',
  'createImage', 'saveCanvas', 'saveFrames', 'loadImage', 'image', 'tint', 'noTint', 'imageMode',
  'blend', 'copy', 'filter', 'get', 'loadPixels', 'set', 'updatePixels',
  'loadJSON', 'loadStrings', 'loadTable', 'loadXML', 'loadBytes', 'httpGet', 'httpPost', 'httpDo',
  'createWriter', 'save', 'saveJSON', 'saveStrings', 'saveTable',
  'windowResized', 'focused', 'cursor', 'frameRate', 'noCursor', 'displayWidth', 'displayHeight', 'windowWidth', 'windowHeight', 'fullscreen', 'pixelDensity', 'displayDensity', 'getURL', 'getURLPath', 'getURLParams',
  'createCanvas', 'resizeCanvas', 'noCanvas', 'createGraphics', 'blendMode',
  'loadModel', 'model', 'loadShader', 'createShader', 'shader',
  'texture', 'ambientMaterial', 'specularMaterial', 'normalMaterial',
  'camera', 'perspective', 'ortho', 'orbitControl',
  'ambientLight', 'directionalLight', 'pointLight',
  'print', 'frameCount', 'delta', 'focused', 'cursor',
  'deviceOrientation', 'accelerationX', 'accelerationY', 'accelerationZ',
  'pAccelerationX', 'pAccelerationY', 'pAccelerationZ',
  'rotationX', 'rotationY', 'rotationZ',
  'pRotationX', 'pRotationY', 'pRotationZ',
  'keyIsPressed', 'key', 'keyCode', 'mouseX', 'mouseY', 'pmouseX', 'pmouseY', 'winMouseX', 'winMouseY', 'pwinMouseX', 'pwinMouseY',
  'mouseButton', 'mouseIsPressed', 'touches', 'pixels',
];

// p5.js overridable functions
const p5OverridableFunctions = [
  'setup', 'draw', 'preload', 'mousePressed', 'mouseReleased', 'mouseMoved', 'mouseDragged', 'mouseClicked', 'mouseWheel',
  'keyPressed', 'keyReleased', 'keyTyped',
  'touchStarted', 'touchMoved', 'touchEnded',
  'deviceMoved', 'deviceTurned', 'deviceShaken'
];

// p5.js constants
const p5Constants = [
  'P2D', 'WEBGL', 'ARROW', 'CROSS', 'HAND', 'MOVE', 'TEXT', 'WAIT',
  'HALF_PI', 'PI', 'QUARTER_PI', 'TAU', 'TWO_PI',
  'DEGREES', 'RADIANS',
  'CORNER', 'CORNERS', 'RADIUS', 'RIGHT', 'LEFT', 'CENTER', 'TOP', 'BOTTOM', 'BASELINE',
  'POINTS', 'LINES', 'LINE_STRIP', 'LINE_LOOP', 'TRIANGLES', 'TRIANGLE_FAN', 'TRIANGLE_STRIP', 'QUADS', 'QUAD_STRIP',
  'CLOSE', 'OPEN', 'CHORD', 'PIE', 'PROJECT', 'SQUARE', 'ROUND', 'BEVEL', 'MITER',
  'RGB', 'HSB', 'HSL',
  'AUTO', 'ALT', 'BACKSPACE', 'CONTROL', 'DELETE', 'DOWN_ARROW', 'ENTER', 'ESCAPE', 'LEFT_ARROW', 'OPTION',
  'RETURN', 'RIGHT_ARROW', 'SHIFT', 'TAB', 'UP_ARROW',
  'BLEND', 'REMOVE', 'ADD', 'MULTIPLY', 'SCREEN', 'REPLACE', 'OVERLAY', 'HARD_LIGHT', 'SOFT_LIGHT', 'DODGE', 'BURN',
  'THRESHOLD', 'GRAY', 'OPAQUE', 'INVERT', 'POSTERIZE', 'DILATE', 'ERODE', 'BLUR',
  'NORMAL', 'ITALIC', 'BOLD', 'BOLDITALIC',
  'LINEAR', 'QUADRATIC', 'BEZIER', 'CURVE',
];

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...Object.fromEntries(p5GlobalFunctions.map(func => [func, 'readonly'])),
        ...Object.fromEntries(p5OverridableFunctions.map(func => [func, 'writable'])),
        ...Object.fromEntries(p5Constants.map(constant => [constant, 'readonly'])),
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': ['error', { 
        'varsIgnorePattern': p5OverridableFunctions.join('|')
      }]
    },
  },
];