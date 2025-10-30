declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher } from 'three';
  
    export class OrbitControls extends EventDispatcher {
      constructor(object: Camera, domElement?: HTMLElement);
      enabled: boolean;
      target: import("three").Vector3;
      update(): void;
      dispose(): void;
      enableDamping: boolean;
      dampingFactor: number;
      enableZoom: boolean;
      enablePan: boolean;
    }
  }
  