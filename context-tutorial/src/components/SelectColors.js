import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  return (
    <>
      <h2>색상을선택하세요</h2>
      <p>좌클릭은 "큰 사각형" 우클릭은 "작은 사각형"의 색상을 변경합니다.</p>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{ background: color, width: ' 24px', height: '24px', cursor: 'pointer' }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  // 마우스 우클릭 -> 두 번째 상자 색상 바꿈
                  e.preventDefault(); // 우클릭시 메뉴 안 보이게
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
    </>
  );
};

export default SelectColors;
