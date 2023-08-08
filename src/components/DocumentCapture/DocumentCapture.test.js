import { render } from 'utils/test.utils';
import { DocumentCapture } from './DocumentCapture';

describe('DocumentCapture', () => {
  it('should render DocumentCapture', () => {
    const component = render(<DocumentCapture />);

    expect(component).toBeDefined();
  });
});
