import Button from '../../Button/Button';

import {LoopIcon} from '@radix-ui/react-icons';

const LoopButton = () => {
  return (
    <Button data-active={false} type="icon">
      <LoopIcon />
    </Button>
  );
};

export default LoopButton;
