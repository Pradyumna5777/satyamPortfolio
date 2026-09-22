import { SmartMouse } from 'react-smart-mouse';

export default function CustomCursor() {
  return (
    <SmartMouse
      // Match your portfolio's accent color
      color="#00ffb3" 
      // Size of the base cursor dot
      size={12} 
      // Scale factor when hovering interactive elements
      hoverScale={2.5} 
      // Smoothness of the follow effect
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
    />
  );
}