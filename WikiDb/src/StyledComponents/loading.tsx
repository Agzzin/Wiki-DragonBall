import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 80%, 100% { 
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  40% { 
    transform: translateY(-30px) scale(1.1);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 2.5rem;
  position: relative;
`;

const GlowRing = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid rgba(251, 146, 60, 0.2);
  animation: ${rotate} 3s linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    width: 8px;
    height: 8px;
    background: #FB923C;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(251, 146, 60, 0.8);
    transform: translateX(-50%);
  }
`;

const DragonBalls = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Ball = styled.div<{ delay: string }>`
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #FB923C 0%, #ff6b00 100%);
  border-radius: 50%;
  box-shadow: 
    0 0 25px rgba(251, 146, 60, 0.6),
    0 4px 8px rgba(0, 0, 0, 0.3),
    inset -3px -3px 6px rgba(0, 0, 0, 0.4),
    inset 2px 2px 4px rgba(255, 255, 255, 0.3);
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 
      0 0 35px rgba(251, 146, 60, 0.8),
      0 6px 12px rgba(0, 0, 0, 0.4);
  }
`;

const Star = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.3) 100%);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const LoadingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const LoadingText = styled.p`
  color: #FB923C;
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0;
  text-shadow: 0 0 15px rgba(251, 146, 60, 0.4);
  letter-spacing: 0.5px;
  background: linear-gradient(90deg, #FB923C 0%, #ff6b00 50%, #FB923C 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 2s linear infinite;
`;

const LoadingSubtext = styled.span`
  color: rgba(251, 146, 60, 0.6);
  font-size: 0.875rem;
  font-weight: 400;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 3px;
  background: rgba(251, 146, 60, 0.15);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, transparent, #FB923C, transparent);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s linear infinite;
  box-shadow: 0 0 10px rgba(251, 146, 60, 0.5);
`;

export const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <GlowRing />
      <DragonBalls>
        <Ball delay="0s">
          <Star />
        </Ball>
        <Ball delay="0.2s">
          <Star />
        </Ball>
        <Ball delay="0.4s">
          <Star />
        </Ball>
      </DragonBalls>
      <LoadingTextContainer>
        <LoadingText>Invocando personagens</LoadingText>
        <LoadingSubtext>Aguarde um momento...</LoadingSubtext>
        <ProgressBar>
          <ProgressFill />
        </ProgressBar>
      </LoadingTextContainer>
    </LoadingContainer>
  );
};

export default Loading;