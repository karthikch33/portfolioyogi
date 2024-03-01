// PinComponent.tsx
import React from "react";
import { PinContainer } from "../sub/3d-pin";

const PinComponent: React.FC = () => {
    return (
      <PinContainer
        title="Example Pin"
        href="https://example.com"
        containerClassName="my-pin-container"
        className="my-pin"
      >
        {/* Your content goes here */}
        <div>Hello, I am a pinned content!</div>
      </PinContainer>
    );
  };
  
  export default PinComponent;