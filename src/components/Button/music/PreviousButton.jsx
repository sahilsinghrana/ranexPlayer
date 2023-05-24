import Button from '../../Button/Button';

import {TrackPreviousIcon} from '@radix-ui/react-icons';

const PreviousButton = () => {
  return (
    <Button size="sm" rounded="full" className={'m-1 w-9 h-9'}>
      <TrackPreviousIcon />
    </Button>
  );
};

export default PreviousButton;
