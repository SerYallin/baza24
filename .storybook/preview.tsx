import { Preview } from '@storybook/react-vite'
import './preview.css'
const preview: Preview = {
  decorators: [
    (Story, { parameters }  ) => {
      const { layout } = parameters;
      switch (layout) {
        case 'Common':
          return (
            // Your page layout is probably a little more complex than this ;)
            <div className="common-layout">
              <Story />
            </div>
          );
        default:
          // In the default case, don't apply a layout
          return <Story />;
      }
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;