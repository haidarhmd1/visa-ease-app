import { render } from 'utils/test.utils';
import { DocumentCapture } from './DocumentCapture';

describe('DocumentCapture', () => {
  it('should render DocumentCapture', () => {
    const component = render(<DocumentCapture />);

    expect(component).toBeDefined();
  });

  it('should preview a "Requesting Permssion" screen when the component first load', () => {
    const component = render(<DocumentCapture />);

    const cameraPermissionLoading = component.getByTestId(
      'camera-permission-loading'
    );

    expect(cameraPermissionLoading).toHaveTextContent(
      'Requesting permissions...'
    );
  });
});
