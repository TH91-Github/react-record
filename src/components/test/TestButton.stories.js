// TestButton.stories 
import { fn } from '@storybook/test';
import { TestButton } from './TestButton';

export default {
  title: 'Component/TestButton',
  component: TestButton,
  parameters: {
    componentSubtitle:'TestButton 컴포넌트 테스트 진행중입니다.',
    docs:{
      description: {
        component: 'TestButton 컴포넌트 description 입니다.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label:{
      description: "label 설명",
    },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    label: 'Button',
  },
};
